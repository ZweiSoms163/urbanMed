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
  isEditModalOpen: boolean;
  editingUser: User | null;
  users: User[];
  currentGender: '';
}
export interface Name {
  first: string;
  last: string;
}
export interface User {
  id: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  isNew: boolean;
}
