export function formatCurrencyNumber(value?: number) {
	if (value == null) {
		return null;
	}

	return new Intl.NumberFormat("pt-br", {
		style: "currency",
		currency: "BRL",
	}).format(value);
}
