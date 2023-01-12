import * as S from "./style";
interface StatusProps {
  title: string;
  color: string;
  textColor : string;
}
export default function StatusItem({ title, color ,textColor}: StatusProps) {
  return (
    <S.StatusLayout>
      <S.Location textColor = {textColor}>{title}</S.Location>
      <S.ColorDiv color={color} />
    </S.StatusLayout>
  );
}
