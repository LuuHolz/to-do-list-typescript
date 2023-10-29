//un interface se puede extender y un type no: interface auto extends sub {email: string} - lo que hago es agregarle algo mas a mi interface sin modificar el primero
export interface Sub {
    nick: string,
    avatar: string,
    subMonths: number,
    description?: string
  }