import { Alert, AlertIcon } from '@chakra-ui/react';

const Phishing = () => {
	return (
		<Alert status="warning" justifyContent={'center'} fontWeight="bold">
			<AlertIcon mr="4px" />
			Please make sure you are on swapstream.finance - check the URL carefully.
		</Alert>
	);
};

export { Phishing };
