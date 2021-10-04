export interface AuthUser {
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  prv: string;
  role: string;
  sub: number;
  user_id: number;
  username: string;
}
