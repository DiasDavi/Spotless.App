interface User {
  name?: string;
  email?: string;
  password?: string;
  adress?: Adress;
}

interface ServiceProvider {
  name: string;
  password: string;
  serviceType: string;
  price: number;
  adressId: number;
}

interface Adress {
  state?: string;
  city?: string;
  street?: string;
  houseNumber?: number;
  additionalObservation?: string;
}

interface UserLogin {
  name: string;
  pass: string;
}

export { User, Adress, ServiceProvider, UserLogin };
