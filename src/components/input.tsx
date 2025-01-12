'use client';

import Image from 'next/image';
import { ChangeEvent, ElementType, InputHTMLAttributes, useMemo, useState } from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';
import { Field, Input as HeadlessInput, Label } from '@headlessui/react';
import { formatBirthDate } from '@/utils/format-birth';
import { cn } from '@/utils/cn';

type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  validation?: object;
  suffix?: ElementType;
};

const Input = <T extends FieldValues>({
  label,
  name,
  control,
  validation,
  suffix: SuffixComponent,
  ...props
}: InputProps<T>) => {
  const { field, fieldState } = useController({ control, name, rules: validation });
  const { type = 'text', disabled = false } = props;
  const [inputType, setInputType] = useState(type);
  const isErrorPresent = !!fieldState.error;

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const isVisibleDeleteValueButton = useMemo(
    () =>
      !disabled && field.value && field.name !== 'code' && type !== 'password' && type !== 'search',
    [disabled, field.name, field.value, type],
  );

  return (
    <>
      <Field
        disabled={disabled}
        className="relative flex w-full flex-col"
      >
        <Label
          className={clsx(
            'label-small data-[disabled]:text-[#111]/[.4]',
            isErrorPresent && 'text-error',
          )}
        >
          {label}
        </Label>
        <HeadlessInput
          {...props}
          onChange={(e) => {
            props.onChange && props.onChange(e);
            field.onChange(e);
          }}
          onBlur={field.onBlur}
          ref={field.ref}
          value={field.value ?? ''}
          disabled={field.disabled}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            if (type === 'number') {
              if (e.currentTarget.value.length > e.currentTarget.maxLength)
                e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.maxLength);
            }
            if (type === 'birth') {
              e.currentTarget.value = formatBirthDate(e.currentTarget.value);
            }
          }}
          className={cn(
            'body-small placeholder:body-small h-10 w-full border-b-[0.75px] border-[#111]/[.4] focus:bg-white focus:outline-none data-[focus]:border-[#111] data-[disabled]:bg-white data-[disabled]:text-[#111]/[.4]',
            isErrorPresent && 'border-error data-[focus]:border-error',
          )}
        />
        {isVisibleDeleteValueButton && (
          <button
            type="button"
            onClick={() => {
              field.onChange('');
            }}
            className="absolute bottom-[10px] right-0"
          >
            <Image
              src="/icons/delete-icon.svg"
              alt="전체 삭제"
              width={20}
              height={20}
              className="hover:cursor-pointer"
            />
          </button>
        )}
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute bottom-[10px] right-0"
          >
            <Image
              src={inputType === 'password' ? '/icons/hide.svg' : '/icons/hide-off.svg'}
              alt="비밀번호 보이기/숨기기"
              width={20}
              height={20}
              className="hover:cursor-pointer"
            />
          </button>
        )}
        {SuffixComponent && (
          <div className="absolute bottom-[10px] right-0">
            <SuffixComponent />
          </div>
        )}
      </Field>
      {isErrorPresent && (
        <span className="body-small text-error">{fieldState?.error?.message?.toString()}</span>
      )}
    </>
  );
};

export default Input;
