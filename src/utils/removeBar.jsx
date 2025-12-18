export default function removeBr(text) {
	if (!text) return '';
	return text.replace(/<br\s*\/?>/gi, '');
}
