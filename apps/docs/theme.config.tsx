import React, { ComponentProps, ReactElement, ReactNode } from "react";
import { DocsThemeConfig, Link, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";

const Logo = (props: ComponentProps<"svg">): ReactElement => {
  const { theme } = useTheme();
  const [color, setColor] = React.useState("white");
  React.useEffect(() => {
    setColor(theme === "dark" ? "white" : "black");
  }, [theme]);

  return (
    <div className="flex space-x-5 items-center">
      <svg
        width="28"
        height="23"
        viewBox="0 0 112 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M102.997 41.0937C102.66 41.2 102.362 41.4039 102.131 41.671L100.104 44.0141L71.3642 81.685C70.5322 82.7756 68.8743 82.724 68.1117 81.5838L47.2566 50.401C46.4686 49.2227 44.7388 49.2156 43.941 50.3873L25.4091 77.605C24.7293 78.6035 23.3262 78.7761 22.4247 77.972L10.348 67.2006C9.53248 66.4733 9.45171 65.2261 10.1666 64.3996L12.2283 62.0161C12.9576 61.1729 14.2356 61.0888 15.0691 61.8292L21.0031 67.0998C21.9046 67.9005 23.3044 67.7274 23.9837 66.7312L43.9408 37.4638C44.739 36.2933 46.4677 36.3009 47.2555 37.4784L68.4066 69.0915C69.1721 70.2357 70.8378 70.2824 71.6662 69.1829L90.3615 44.3682C91.3081 43.1117 90.4996 41.2701 88.9673 40.9137C86.8134 40.4126 84.7292 39.6282 82.7703 38.5768C79.7446 36.9529 77.0811 34.7264 74.943 32.0335C72.8049 29.3406 71.2372 26.2381 70.3358 22.916C69.6358 20.3362 69.3492 17.6661 69.482 15.0053C69.5427 13.7907 68.614 12.7134 67.3979 12.7134H6.77705C4.97969 12.7134 3.25595 13.4299 1.98502 14.7051C0.714098 15.9804 9.98328e-05 17.71 9.98328e-05 19.5134V94.3135C9.98328e-05 96.117 0.714098 97.8466 1.98502 99.1218C3.25595 100.397 4.97969 101.113 6.77705 101.113H101.654C103.452 101.113 105.175 100.397 106.446 99.1218C107.717 97.8466 108.431 96.117 108.431 94.3135V42.2061C108.431 40.6309 106.722 39.7402 105.276 40.3661C104.495 40.7046 103.997 40.7778 102.997 41.0937Z"
          fill={color}
        />
        <path
          d="M95.0576 34C104.415 34 112 26.3889 112 17C112 7.61116 104.415 0 95.0576 0C85.7006 0 78.1152 7.61116 78.1152 17C78.1152 26.3889 85.7006 34 95.0576 34Z"
          fill="#F9A858"
        />
      </svg>
      <svg
        width="112"
        height="16"
        viewBox="0 0 126 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.275568 27V0.818181H5.81108V22.4361H17.0355V27H0.275568ZM43.7415 13.9091C43.7415 16.7642 43.2003 19.1932 42.1179 21.196C41.044 23.1989 39.5781 24.7287 37.7202 25.7855C35.8707 26.8338 33.7912 27.358 31.4815 27.358C29.1548 27.358 27.0668 26.8295 25.2173 25.7727C23.3679 24.7159 21.9063 23.1861 20.8324 21.1832C19.7585 19.1804 19.2216 16.7557 19.2216 13.9091C19.2216 11.054 19.7585 8.625 20.8324 6.62216C21.9063 4.61932 23.3679 3.09375 25.2173 2.04545C27.0668 0.988636 29.1548 0.460226 31.4815 0.460226C33.7912 0.460226 35.8707 0.988636 37.7202 2.04545C39.5781 3.09375 41.044 4.61932 42.1179 6.62216C43.2003 8.625 43.7415 11.054 43.7415 13.9091ZM38.1293 13.9091C38.1293 12.0597 37.8523 10.5 37.2983 9.23011C36.7528 7.96023 35.9815 6.99716 34.9844 6.34091C33.9872 5.68466 32.8196 5.35653 31.4815 5.35653C30.1435 5.35653 28.9759 5.68466 27.9787 6.34091C26.9815 6.99716 26.206 7.96023 25.652 9.23011C25.1065 10.5 24.8338 12.0597 24.8338 13.9091C24.8338 15.7585 25.1065 17.3182 25.652 18.5881C26.206 19.858 26.9815 20.821 27.9787 21.4773C28.9759 22.1335 30.1435 22.4616 31.4815 22.4616C32.8196 22.4616 33.9872 22.1335 34.9844 21.4773C35.9815 20.821 36.7528 19.858 37.2983 18.5881C37.8523 17.3182 38.1293 15.7585 38.1293 13.9091ZM65.2028 9.28125C65.0238 8.65909 64.7724 8.10937 64.4485 7.6321C64.1246 7.14631 63.7283 6.73722 63.2596 6.40483C62.7994 6.06392 62.271 5.80398 61.6744 5.625C61.0863 5.44602 60.4343 5.35653 59.7184 5.35653C58.3803 5.35653 57.2042 5.68892 56.19 6.35369C55.1843 7.01846 54.4002 7.98579 53.8377 9.25568C53.2752 10.517 52.994 12.0597 52.994 13.8835C52.994 15.7074 53.271 17.2585 53.8249 18.5369C54.3789 19.8153 55.163 20.7912 56.1772 21.4645C57.1914 22.1293 58.3888 22.4616 59.7695 22.4616C61.0224 22.4616 62.092 22.2401 62.9783 21.7969C63.8732 21.3452 64.555 20.7102 65.0238 19.892C65.5011 19.0739 65.7397 18.1065 65.7397 16.9901L66.8647 17.1562H60.1147V12.9886H71.0707V16.2869C71.0707 18.5881 70.5849 20.5653 69.6133 22.2188C68.6417 23.8636 67.3036 25.1335 65.5991 26.0284C63.8945 26.9148 61.9428 27.358 59.744 27.358C57.2894 27.358 55.1332 26.8168 53.2752 25.7344C51.4173 24.6435 49.9684 23.0966 48.9286 21.0938C47.8974 19.0824 47.3817 16.696 47.3817 13.9347C47.3817 11.8125 47.6886 9.92045 48.3022 8.25852C48.9244 6.58807 49.7937 5.1733 50.9102 4.0142C52.0266 2.85511 53.3263 1.97301 54.8093 1.3679C56.2923 0.762783 57.8988 0.460226 59.6289 0.460226C61.1119 0.460226 62.4925 0.677556 63.771 1.11222C65.0494 1.53835 66.1829 2.14347 67.1715 2.92756C68.1687 3.71165 68.9826 4.64489 69.6133 5.72727C70.244 6.80114 70.6488 7.98579 70.8278 9.28125H65.2028ZM75.2287 27V0.818181H80.7642V22.4361H91.9886V27H75.2287ZM101.19 0.818181V27H95.6545V0.818181H101.19ZM105.744 27V0.818181H116.227C118.153 0.818181 119.76 1.10369 121.047 1.67472C122.334 2.24574 123.301 3.03835 123.949 4.05256C124.597 5.05824 124.92 6.21733 124.92 7.52983C124.92 8.55256 124.716 9.4517 124.307 10.2273C123.898 10.9943 123.335 11.625 122.619 12.1193C121.912 12.6051 121.102 12.9503 120.19 13.1548V13.4105C121.188 13.4531 122.121 13.7344 122.99 14.2543C123.868 14.7741 124.58 15.5028 125.125 16.4403C125.67 17.3693 125.943 18.4773 125.943 19.7642C125.943 21.1534 125.598 22.3935 124.908 23.4844C124.226 24.5668 123.216 25.4233 121.878 26.054C120.54 26.6847 118.891 27 116.93 27H105.744ZM111.28 22.4744H115.793C117.335 22.4744 118.46 22.1804 119.168 21.5923C119.875 20.9957 120.229 20.2031 120.229 19.2145C120.229 18.4901 120.054 17.8509 119.705 17.2969C119.355 16.7429 118.857 16.3082 118.209 15.9929C117.57 15.6776 116.807 15.5199 115.92 15.5199H111.28V22.4744ZM111.28 11.7741H115.384C116.142 11.7741 116.815 11.642 117.403 11.3778C118 11.1051 118.469 10.7216 118.81 10.2273C119.159 9.73295 119.334 9.14062 119.334 8.45028C119.334 7.50426 118.997 6.74148 118.324 6.16193C117.659 5.58239 116.713 5.29261 115.486 5.29261H111.28V11.7741Z"
          fill="#F9A858"
        />
      </svg>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/LogLib/loglib",
  },
  chat: {
    link: "https://t.me/loglib_community",
  },
  footer: {
    text: "MIT 2022 © Loglib",
  },
  feedback: {
    labels: "Feedback from Loglib Docs:",
    useLink: () => "https://t.me/loglib_community",
  },
  editLink: {
    component: ({ ...props }) => (
      <Link
        {...props}
        href={`https://github.com/LogLib/loglib/apps/docs/${props.filePath}`}
        target="_blank"
      />
    ),
    text: "Edit this page on GitHub →",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  docsRepositoryBase: "https://github.com/LogLib/loglib/apps/docs/pages/docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Loglib.io",
      };
    }
  },
};

export default config;
