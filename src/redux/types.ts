export interface ModalState {
  formData: {
    lastName: string;
    firstName: string;
    email: string;
    gender: string; 
  };
  errors: {
    lastName: string;
    firstName: string;
    email: string;
  };
  isModalOpen: boolean;
  users: User[]; 
  currentGender: '',
  
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}