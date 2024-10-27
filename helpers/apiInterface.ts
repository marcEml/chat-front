//-------------------------------------------Data

export interface LoginData {
  phone: string;
  password: string;
}

export interface RegistrationData {
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  role: string;
  password: string;
}

export interface RegistrationClassData {
  name: string;
  year: string;
}

export interface ApproveData {
  classAccessId: string;
  teacherId: string;
}

export interface DeletionClassData {
  id: string;
}

export interface JoinClassData {
  classId: string;
  userId: string;
}

//-------------------------------------------ResponseData

export interface AuthResponseData {
  status: true;
  data: {
    user: {
      id: string;
      lastname: string;
      firstname: string;
      phone: string;
      role: string;
      classAccesses: any;
      teachingClasses: any;
    };
    token: string;
  };
}

export interface RegistrationResponseData {
  status: true;
  data: {
    user: {
      id: true;
      lastname: true;
      firstname: true;
      phone: true;
      email: true;
      birthday: true;
      gender: true;
      role: true;
    };
  };
}

export interface ClassData {
  status: true;
  data: {
    class: any;
  };
}

export interface ApproveResponseData {
  status: true;
  data: {
    updatedClassAccess: any;
  };
}

export interface JoinClassResponseData {
  status: true;
  data: {
    newClassAccess: any;
  };
}

export interface RequestData {
  status: true;
  data: {
    requests: any;
  };
}

export interface DeletionResponseData {
  status: true;
  data: {
    message: string;
  };
}

//-------------------------------------------Error

export interface ResponseError {
  data: {
    message: string;
  };
  status: boolean;
}
