import { axios } from "../lib/core";
import { IService } from "../types/services";

const gold585: IService = {
	service: "",
	countries: ["RU"],
	numberTemplate: "+* (***) ***-**-**",
	send: async function (number) {
		return true;
	},
};

export default gold585;
