import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Flex {...props} direction="column" align={align} />
    );
};
