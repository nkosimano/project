import { useState, useCallback } from 'react';
import { QuestionnaireState, QuestionnaireResponse, ContactInfo, QuestionOption } from '../types/questionnaire';
import { questions } from '../data/questionnaireData';
import { sendDiscoveryEmail } from '../utils/sesClient';

const initialState: QuestionnaireState = {
  currentQuestionIndex: 0,
  responses: [],
  isComplete: false,
  isSubmitting: false,
  showSuccessModal: false
};

export const useQuestionnaire = () => {
  const [state, setState] = useState<QuestionnaireState>(initialState);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const currentQuestion = questions[state.currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((state.currentQuestionIndex + 1) / totalQuestions) * 100;

  const updateResponse = useCallback((questionId: string, answer: string | string[] | number) => {
    setState(prev => {
      const existingIndex = prev.responses.findIndex(r => r.questionId === questionId);
      const newResponse: QuestionnaireResponse = {
        questionId,
        answer,
        timestamp: new Date()
      };

      let updatedResponses;
      if (existingIndex >= 0) {
        updatedResponses = [...prev.responses];
        updatedResponses[existingIndex] = newResponse;
      } else {
        updatedResponses = [...prev.responses, newResponse];
      }

      return {
        ...prev,
        responses: updatedResponses
      };
    });
  }, []);

  const updateContactInfo = useCallback((info: Partial<ContactInfo>) => {
    setContactInfo(prev => ({ ...prev, ...info }));
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        isComplete: nextIndex >= totalQuestions
      };
    });
  }, [totalQuestions]);

  const previousQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1)
    }));
  }, []);

  const goToQuestion = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, Math.min(index, totalQuestions - 1))
    }));
  }, [totalQuestions]);

  const getCurrentResponse = useCallback((questionId: string) => {
    return state.responses.find(r => r.questionId === questionId)?.answer;
  }, [state.responses]);

  const isCurrentQuestionAnswered = useCallback(() => {
    if (!currentQuestion) return false;
    
    if (currentQuestion.type === 'contact') {
      return Boolean(contactInfo.name && contactInfo.email && contactInfo.company);
    }
    
    const response = getCurrentResponse(currentQuestion.id);
    if (!currentQuestion.required) return true;
    
    if (Array.isArray(response)) {
      return response.length > 0;
    }
    
    return response !== undefined && response !== '' && response !== null;
  }, [currentQuestion, getCurrentResponse, contactInfo]);

  const generateEmailContent = useCallback(() => {
    const responsesByCategory = questions.reduce((acc, question) => {
      if (!acc[question.category]) {
        acc[question.category] = [];
      }
      
      const response = state.responses.find(r => r.questionId === question.id);
      if (response || question.type === 'contact') {
        acc[question.category].push({
          question,
          response: question.type === 'contact' ? contactInfo : response
        });
      }
      
      return acc;
    }, {} as Record<string, any[]>);

    let emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RuleRev - New Discovery Submission</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: #f8fafc;
            background: linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 50%, #20b2aa 100%);
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            color: #1e293b;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            color: #334155;
            font-size: 16px;
        }
        .content {
            padding: 30px;
        }
        .contact-info {
            background: rgba(0, 245, 255, 0.1);
            border: 1px solid rgba(0, 245, 255, 0.2);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
        }
        .contact-info h2 {
            margin: 0 0 15px 0;
            color: #00f5ff;
            font-size: 20px;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .contact-item {
            display: flex;
            flex-direction: column;
        }
        .contact-label {
            font-size: 12px;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .contact-value {
            font-size: 16px;
            color: #f8fafc;
            font-weight: 500;
        }
        .section {
            margin-bottom: 40px;
        }
        .section-title {
            color: #00f5ff;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #00f5ff;
            display: inline-block;
        }
        .question-item {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
            border-left: 4px solid #1e90ff;
        }
        .question-title {
            color: #cbd5e1;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .question-answer {
            color: #f8fafc;
            font-size: 15px;
            line-height: 1.5;
        }
        .scale-answer {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 100%);
            color: #1e293b;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            margin-right: 10px;
        }
        .multiple-choice {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .choice-tag {
            background: rgba(30, 144, 255, 0.2);
            color: #87ceeb;
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 14px;
            border: 1px solid rgba(30, 144, 255, 0.3);
        }
        .footer {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px 30px;
            text-align: center;
            color: #94a3b8;
            font-size: 14px;
        }
        .timestamp {
            color: #64748b;
            font-size: 12px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>RuleRev - New Project Inquiry</h1>
            <p>Comprehensive Discovery Submission</p>
        </div>
        
        <div class="content">
            <div class="contact-info">
                <h2>Contact Information</h2>
                <div class="contact-grid">
                    <div class="contact-item">
                        <div class="contact-label">Name</div>
                        <div class="contact-value">${contactInfo.name}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Email</div>
                        <div class="contact-value">${contactInfo.email}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Company</div>
                        <div class="contact-value">${contactInfo.company}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Phone</div>
                        <div class="contact-value">${contactInfo.phone || 'Not provided'}</div>
                    </div>
                </div>
            </div>
    `;

    Object.entries(responsesByCategory).forEach(([category, items]) => {
      if (category === 'Contact Information') return; // Skip contact info as it's already displayed
      
      emailContent += `
            <div class="section">
                <h2 class="section-title">${category}</h2>
      `;
      
      items.forEach(({ question, response }) => {
        if (!response) return;
        
        let answerHtml = '';
        
        if (question.type === 'scale') {
          const scaleValue = response.answer as number;
          answerHtml = `<span class="scale-answer">${scaleValue}/10</span>`;
          if (question.scaleLabels) {
            answerHtml += `<span style="color: #94a3b8; font-size: 14px;">(${question.scaleLabels.min} → ${question.scaleLabels.max})</span>`;
          }
        } else if (question.type === 'multiple-choice') {
          const answers = response.answer as string[];
          answerHtml = `<div class="multiple-choice">`;
           answers.forEach(answer => {
            const option = question.options?.find((opt: QuestionOption) => opt.value === answer);
            answerHtml += `<span class="choice-tag">${option?.text || answer}</span>`;
          });
          answerHtml += `</div>`;
        } else if (question.type === 'single-choice') {
          const option = question.options?.find((opt: QuestionOption) => opt.value === response.answer);
          answerHtml = `<div class="question-answer">${option?.text || response.answer}</div>`;
        } else {
          answerHtml = `<div class="question-answer">${String(response.answer).replace(/\n/g, '<br>')}</div>`;
        }
        
        emailContent += `
                <div class="question-item">
                    <div class="question-title">${question.title}</div>
                    ${answerHtml}
                    <div class="timestamp">Answered: ${new Date(response.timestamp).toLocaleString()}</div>
                </div>
        `;
      });
      
      emailContent += `</div>`;
    });

    emailContent += `
        </div>
        
        <div class="footer">
            <p>This discovery was submitted through the RuleRev website.</p>
            <p>Submission Date: ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
    `;

    return emailContent;
  }, [state.responses, contactInfo]);

  const submitQuestionnaire = useCallback(async () => {
    setState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      const emailContent = generateEmailContent();
      
      const success = await sendDiscoveryEmail({
        contactInfo,
        responses: state.responses,
        emailContent
      });
      
      if (success) {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          showSuccessModal: true
        }));
      } else {
        throw new Error('Failed to send discovery email');
      }
      
    } catch (error) {
      console.error('Error submitting discovery:', error);
      setState(prev => ({
        ...prev,
        isSubmitting: false
      }));
      // You could add error state handling here
    }
  }, [state.responses, contactInfo, generateEmailContent]);

  const closeSuccessModal = useCallback(() => {
    setState(prev => ({
      ...prev,
      showSuccessModal: false
    }));
  }, []);

  const resetQuestionnaire = useCallback(() => {
    setState(initialState);
    setContactInfo({ name: '', email: '', company: '', phone: '' });
  }, []);

  return {
    state,
    contactInfo,
    currentQuestion,
    totalQuestions,
    progress,
    updateResponse,
    updateContactInfo,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    getCurrentResponse,
    isCurrentQuestionAnswered,
    submitQuestionnaire,
    closeSuccessModal,
    resetQuestionnaire
  };
};