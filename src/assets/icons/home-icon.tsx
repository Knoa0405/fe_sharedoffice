const HomeIcon = ({ color = '#1DCC9A' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <path
      fill={color}
      d="M6.574 18.104h2.713v-5.426h5.426v5.426h2.713V9.965L12 5.895l-5.426 4.07zm0 1.809a1.74 1.74 0 0 1-1.277-.53 1.74 1.74 0 0 1-.532-1.279V9.965q0-.429.193-.814a1.7 1.7 0 0 1 .53-.633l5.427-4.07q.248-.18.52-.27.27-.09.565-.09t.565.09.52.27l5.426 4.07q.339.249.532.633a1.8 1.8 0 0 1 .192.814v8.14q0 .746-.531 1.277-.532.531-1.278.531h-4.522v-5.426h-1.809v5.426z"
    />
  </svg>
);
export default HomeIcon;