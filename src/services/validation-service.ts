class ValidationService {
	static validate(value: string, message: string) {
		return value.trim() === '' || !value ? message : null;
	}
}

export default ValidationService;
