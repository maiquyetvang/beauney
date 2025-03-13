import { post } from './api.service';

export const formApis = {
  submitGuestFormAnswer: (
    formId: string,
    data: {
      businessId: string;
      name: string;
      language: string;
      fromDomain?: string;
      email: string;
      answer: Record<string, string | string[]>;
    },
  ): Promise<{ data: boolean }> => {
    return post(`/help-desk/forms/${formId}`, data);
  },
};
