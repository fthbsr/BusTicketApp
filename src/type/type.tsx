export interface UserInfo {
    Name: string;
    SurName: string;
    Gender: string;
    BirthDay: string;
    UserName: string;
    Password: string;
    id: string;
  }
  
export interface AuthContextType {
    loginUser: UserInfo | undefined;
    setLoginUser: (user: UserInfo) => void;
    userLogin : (userName : string , password:string) =>Promise<void>
  }