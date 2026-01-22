import React from 'react';

export default function renderPreTitle(
	text,
	greenClass = 'text-[#74ca31]',
	yellowClass = 'text-[#F8EA2B]'
) {
	if (!text || typeof text !== 'string') return null;

	const lines = text.split('<br>');

	const TAG_REGEX = /<(green|yellow|strong)>(.*?)<\/\1>/g;

	return lines.flatMap((line, lineIndex) => {
		let lastIndex = 0;
		const parts = [];
		let match;

		while ((match = TAG_REGEX.exec(line)) !== null) {
			const [fullMatch, tagName, content] = match;

			const before = line.substring(lastIndex, match.index);
			if (before) {
				parts.push(<span key={`b-${lineIndex}-${lastIndex}`}>{before}</span>);
			}

			const parsed = renderPreTitle(content, greenClass, yellowClass);

			if (tagName === 'strong') {
				parts.push(
					<strong key={`st-${lineIndex}-${match.index}`}>{parsed}</strong>
				);
			} else {
				const colorClass = tagName === 'green' ? greenClass : yellowClass;

				// if strong is nested inside, bold + color
				const isStrongInside =
					typeof parsed?.props?.children === 'object' &&
					parsed.type === 'strong';

				if (isStrongInside) {
					parts.push(
						<strong
							key={`sc-${lineIndex}-${match.index}`}
							className={colorClass}>
							{parsed.props.children}
						</strong>
					);
				} else {
					parts.push(
						<span
							key={`c-${lineIndex}-${match.index}`}
							className={colorClass}>
							{parsed}
						</span>
					);
				}
			}

			lastIndex = match.index + fullMatch.length;
		}

		const remaining = line.substring(lastIndex);
		if (remaining) {
			parts.push(<span key={`r-${lineIndex}-${lastIndex}`}>{remaining}</span>);
		}

		return [
			<React.Fragment key={`l-${lineIndex}`}>{parts}</React.Fragment>,
			lineIndex < lines.length - 1 && <br key={`br-${lineIndex}`} />,
		].filter(Boolean);
	});
}
