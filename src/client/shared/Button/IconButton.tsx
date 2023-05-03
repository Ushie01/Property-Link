import { IconButton as Icon } from '@heathmont/moon-core-tw';
import ButtonSizes from '@heathmont/moon-core-tw/lib/button/private/types/ButtonSizes';

type Props = {
  icon: JSX.Element;
  onClick: () => void;
  bgColor: string;
  color: string;
  size: ButtonSizes;
};
const IconButton = ({ icon, onClick, color, size }: Props) => {
  return <Icon icon={icon} color={color} onClick={onClick} size={size} />;
};
export default IconButton;
