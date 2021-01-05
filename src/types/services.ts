type countryCode = "RU";

export interface IService {
	service: string;
	countries: Array<countryCode>;
	numberTemplate: string;
	send: (number: string) => Promise<boolean>;
}
