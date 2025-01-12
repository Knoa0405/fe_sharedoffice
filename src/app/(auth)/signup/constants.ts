import { CheckBoxProps } from '@/components/checkbox';
import { Prettify } from '@/types/utils';

export type TAgreeItems = Prettify<
  Omit<CheckBoxProps, 'onChange' | 'selected'> & {
    id: number;
    name: string;
  }
>;

export const requiredItems: TAgreeItems[] = [
  {
    id: 2,
    name: 'mile',
    outline: false,
    subTitle: '[필수] 마일 이용약관 동의',
    suffix: 'contentLink',
  },
  {
    id: 3,
    name: 'personal',
    outline: false,
    subTitle: '[필수] 개인 정보 수집 및 이용 동의',
    suffix: 'contentLink',
  },
  {
    id: 4,
    name: 'thirdParty',
    outline: false,
    subTitle: '[필수] 개인 정보 제 3자 제공 동의',
    suffix: 'contentLink',
  },
];

export const optionalItems: TAgreeItems[] = [
  { id: 5, name: 'emailAgree', outline: false, subTitle: '이메일', suffix: 'contentLink' },
  { id: 6, name: 'messageAgree', outline: false, subTitle: '문자 메세지', suffix: 'contentLink' },
  { id: 7, name: 'pushAgree', outline: false, subTitle: '앱 푸시', suffix: 'contentLink' },
];

export const titleItems: { name: 'all' | 'optional' }[] = [
  {
    name: 'all',
  },
  {
    name: 'optional',
  },
];
