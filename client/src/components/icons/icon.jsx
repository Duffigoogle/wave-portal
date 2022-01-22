import React from "react";

const Icons = ({ name, size, color, fill, className }) => {
  return name === "check" ? (
    <svg
      width={size || 32}
      height={size || 32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-2.286 22.996l-6.926-6.927 2.424-2.424 4.502 4.502 8.502-8.502 2.425 2.424-10.927 10.927z"
        fill={color || "#06AA65"}
      />
    </svg>
  ) : name === "twitter" ? (
    <svg
      width={size || 18}
      height={size || 18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v18h18V0H0zm13.955 6.459c.005.11.007.22.007.33 0 3.379-2.571 7.274-7.274 7.274a7.235 7.235 0 01-3.919-1.148 5.16 5.16 0 003.785-1.059 2.56 2.56 0 01-2.388-1.775 2.552 2.552 0 001.155-.044A2.558 2.558 0 013.27 7.53v-.032c.345.191.739.306 1.158.32a2.555 2.555 0 01-.791-3.414 7.258 7.258 0 005.27 2.672 2.557 2.557 0 014.356-2.332 5.117 5.117 0 001.623-.62 2.564 2.564 0 01-1.124 1.414c.518-.062 1.01-.2 1.469-.403a5.192 5.192 0 01-1.276 1.324z"
        fill={color || "#222"}
        fillOpacity={0.7}
      />
    </svg>
  ) : name === "minus-sign" ? (
    <svg
      width={size || 24}
      height={size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path stroke={color || "#06AA65"} strokeWidth={3} d="M0 10.5h24" />
    </svg>
  ) : name === "plus-sign" ? (
    <svg
      width={size || 24}
      height={size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke={color || "#06AA65"}
        strokeWidth={3}
        d="M0 10.5h24M10.5 24V0"
      />
    </svg>
  ) : name === "outlink" ? (
    <svg
      width={size || 28}
      height={size || 28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.876 6.206v2.016h8.97L5.5 20.575 6.92 22 19.27 9.647v8.97h2.016V6.206H8.876z"
        fill={color || "#fff"}
      />
    </svg>
  ) : name === "triple-dot" ? (
    <svg width={51} height={51} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x={0.5}
        y={0.5}
        width={50}
        height={50}
        rx={25}
        fill="#F1F1F1"
        stroke="#D0D0D0"
      />
      <circle cx={15.419} cy={26.093} r={3.558} fill="#222" />
      <circle cx={26.538} cy={26.093} r={3.558} fill="#222" />
      <circle cx={37.657} cy={26.093} r={3.558} fill="#222" />
    </svg>
  ) : name === "SearchLeftIcon" ? (
    <svg
      aria-labelledby="title desc"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.9 19.7"
      height={size}
      width={size}
      className={className}
    >
      <title>{"Search"}</title>
      <g fill="none" stroke={color}>
        <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
        <circle cx={8} cy={8} r={7} />
      </g>
    </svg>
  ) : name === "SearchRightIcon" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 487.95 487.95"
      width={size}
      height={size}
      className={className}
    >
      <path d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z" />
    </svg>
  ) : name === "DownloadIcon" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      width={size}
      height={size}
      className={className}
    >
      <path d="M154.389 255.602c.351.351.719.683 1.103.998.169.138.347.258.52.388.218.164.432.333.659.484.212.142.432.265.649.395.202.121.4.248.608.359.223.12.453.221.681.328.215.102.427.21.648.301.223.092.45.167.676.247.236.085.468.175.709.248.226.068.456.119.684.176.246.062.489.131.739.181.263.052.529.083.794.121.219.031.435.073.658.095.492.048.986.075 1.48.075s.988-.026 1.479-.075c.226-.022.444-.064.667-.096.262-.037.524-.068.784-.12.255-.05.504-.121.754-.184.223-.057.448-.105.669-.172.246-.075.483-.167.724-.253.221-.08.444-.152.662-.242.225-.093.44-.202.659-.306.225-.106.452-.206.672-.324.21-.112.408-.239.611-.361.217-.13.437-.252.648-.394.222-.148.431-.314.644-.473.179-.134.362-.258.536-.4.365-.3.714-.617 1.049-.949.016-.016.034-.028.049-.044l70.002-69.998c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.858-21.213-.001l-44.396 44.393V25c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v183.785l-44.392-44.391c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l69.997 69.995z" />
      <path d="M315 160c-8.284 0-15 6.716-15 15v115H30V175c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v130c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15V175c0-8.284-6.716-15-15-15z" />
    </svg>
  ) : name === "ChevronArrow" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M505.183 123.179c-9.087-9.087-23.824-9.089-32.912.002l-216.266 216.27L39.729 123.179c-9.087-9.087-23.824-9.089-32.912.002-9.089 9.089-9.089 23.824 0 32.912L239.55 388.82a23.271 23.271 0 0032.91-.001l232.721-232.727c9.091-9.088 9.091-23.824.002-32.913z"
        fill={color}
      />
    </svg>
  ) : name === "ChevronArrow1" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M502.689 324.653L269.957 150.109a23.272 23.272 0 00-27.927 0L9.311 324.653c-10.282 7.713-12.367 22.3-4.655 32.582 4.572 6.097 11.56 9.311 18.637 9.311 4.858 0 9.759-1.517 13.945-4.656l218.758-164.072L474.763 361.89c10.285 7.714 24.871 5.627 32.582-4.655 7.711-10.282 5.626-24.87-4.656-32.582z"
        fill={color}
      />
    </svg>
  ) : name === "ArrowDown" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30.727 30.727"
      className={className}
    >
      <path d="M29.994 10.183L15.363 24.812.733 10.184a2.5 2.5 0 113.536-3.536l11.095 11.093L26.461 6.647a2.5 2.5 0 113.533 3.536z" />
    </svg>
  ) : name === "WarningAlert" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.732 490.732"
      width={size}
      height={size}
    >
      <path fill={fill} d="M490.699 241.131c-1.173-65.707-26.987-126.827-72.747-172.16-45.76-45.44-108.16-70.4-172.8-68.907-65.706 1.174-127.573 27.734-174.186 74.774-46.827 47.467-72 109.547-70.933 174.827 1.173 65.707 26.987 126.827 72.747 172.16 45.12 44.587 104.747 68.907 168.427 68.907h4.373c65.707-1.173 127.573-27.733 174.187-74.773 46.932-47.468 71.999-109.548 70.932-174.828zm-86.08 159.787c-42.027 42.88-99.307 67.52-159.36 68.48-58.773 1.387-115.627-21.333-157.333-62.827-41.92-41.28-65.493-97.173-66.56-157.227-1.067-59.52 21.973-116.16 64.747-159.467 42.133-42.88 99.413-67.52 159.467-68.48h4.053c58.027 0 112.32 22.187 153.387 62.827 41.707 41.28 65.28 97.173 66.347 157.333 1.066 59.521-21.974 116.161-64.748 159.361z" />
      <path d="M245.366 288.064c5.867 0 10.667-4.8 10.667-10.667V106.731c0-5.867-4.8-10.667-10.667-10.667s-10.667 4.8-10.667 10.667v170.667a10.63 10.63 0 0010.667 10.666zM245.366 330.731h-.427c-11.733.107-21.227 9.707-21.12 21.547.107 11.733 9.707 21.227 21.547 21.12h.427c11.733-.107 21.227-9.707 21.12-21.547-.107-11.733-9.814-21.227-21.547-21.12z" />
    </svg>
  ) : name === "EthereumIcon" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ethereum"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <rect width={512} height={512} rx="15%" fill="#fff" />
      <path fill="#3C3C3B" d="M256 362v107l131-185z" />
      <path fill="#343434" d="M256 41l131 218-131 78-132-78" />
      <path fill="#8C8C8C" d="M256 41v158l-132 60m0 25l132 78v107" />
      <path fill="#141414" d="M256 199v138l131-78" />
      <path fill="#393939" d="M124 259l132-60v138" />
    </svg>
  ) : name === "CopyIcon" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={128}
        y={128}
        width={336}
        height={336}
        rx={57}
        ry={57}
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path
        d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  ) : name === "TriangleArrowIcon" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none  " d="M0 0h24v24H0z" />
      <path fill={color} d="M12 8l6 6H6z" />
    </svg>
  ) : name === "export" ? (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 11v3H2v-3H0v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4l-1.41-1.41L9 8.17V0H7v8.17L4.41 5.59 3 7l5 5 5-5z"
        fill="#222"
      />
    </svg>
  ) : name === "algovest" ? (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx={9} cy={9} r={9} fill="#06AA65" />
      <path fill="url(#prefix__pattern0)" d="M2 2h14v14H2z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_405:300" transform="scale(.01563)" />
        </pattern>
        <image
          id="prefix__image0_405:300"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABIdJREFUeF7tWE1oXVUQnm9u8l5eodafgqJNSypkYWJdKCpxo+KqEKoQEFQQXAmmtEslCAoSl/4UshOloouAgg3iQqQIQuNCwYhkk6i0PBShRbFirrlnRm7xhZvnvefn3mz63nnLd745M/PNN3POPaAh/2HI86dIQFTAkDMQW2DIBRCHYGyB2AJDzkBsgSEXQDwFYgvEFhhyBmILDLkA4ikQW2AvWkBELhPRzTX3Msw84mMrIsrMXkXLsVV7qupykiRP5utem9mCS9P07tHR0TWfBKowAJ4D8K5tD1V9TFU/T9P0SKfTuWjDGmNeB/BiBSYnkXtrjQkQkYyIkiYE5LauyhYq6lLMiIhsW8g+BuD7PSFAVRdU9bWmyf9nf46ZT5TtZYw5A2B+J2jgNIC3yrAicomIDlXF1E90IwXY+qwOKVUqKPMTgi3E8gkzP16MrTYBInKBiB6sk6jF5jdmvrW4LiK/ENFtJTbnmfnR4v+qelpV3/CtfqMh6Kh+Phe8Jnt/sMXKqmpbRN6sSAhJkjzfR1bl5AdwHMBn/XvVUoAteQALABYbtMcVZr4lVFkOf+vMfFfZnsEEiMjHRPSES2bGmLcBnAxNJMdvb29Pt9vtH3xtsyw7zsyfumLaKwIqZUZEl5j5cM9RAxU4j0Vf6avqq0mSvFJ5LPqynONU9X5V/drCdH4fkN66qj6gqqshPnpYAC8DcB6xDkW67gxhN0ERyZMrbRtVXUySZKE/WRH5nYgO1CHBdTlaXl5uzc3NpVV7p2l6tNPp/GTz7T0DjDHv5FfWOn3WoBUuMPNMlU8R+YuI9lWsp8w85iLemwDH5L8XwLeWQL8ioodcwZStr6+v75+amrrav6aqd6rqRp2CFG28CHB97bmkmjtsoII/mfmGktayDeMvmflhH8KdBKjqvKqeacq0qt6uql2foEowHzHzXOF0yY/I0nOdiP5h5ravHycBtsqJyDMjIyMf+DoTkZ+J6IgvvojrqWxtbe2m6enpK00LsnPa2IIRke+I6NheOWvYCl1mPuRqJZ929J4BNmdLS0sH5+fn85egoJ8rAeuRBdxhayMATwP4MCSgyhZwBHqZmQ8WHdnwxapsbW0dbbVamyFBemIzZh71xO7Aqi41E6r6Y9Vmk5OTYxsbG7suICLyBRHt+jzN7bvd7j3j4+O7nsxE5Fci2vXZGxp4Px7AGIDKS1HV/qUEiIjJX6nKjFT1bJIkz5atlajgKjPv98Q24eAiM9carv8jwBizCOClOoNPVU+p6s73++rq6r6ZmZm/y/YyxrwHoJTIUCZCB591CDqek5eSJHnBcXJcu6AAOAHgnANru8p68ZBl2X2tVusbL3AJaJcCXN/wPkxnWfYUM7/PzM6X4s3NzQMTExP5x1Ld3x/MfGNd42uF6pvk5yuHBXAKgNf7/8rKyuHZ2Vnr233PjzHmLIDxOkkw8yN17Kwt0HTD683eeRW+3hIKjTcSEMrYoOGjAgatoqH5RAWEMjZo+KiAQatoaD5RAaGMDRo+KmDQKhqaT1RAKGODhh96BfwLmGm5UP4uIw8AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  ) : name === "token" ? (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="url(#prefix__pattern0)" d="M0 0h18v18H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_401:76" transform="scale(.0098)" />
        </pattern>
        <image
          id="prefix__image0_401:76"
          width={102}
          height={102}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  ) : name === "algo-vest" ? (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx={9} cy={9} r={9} fill="#06AA65" />
      <path fill="url(#prefix__pattern0)" d="M2 2h14v14H2z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_405:300" transform="scale(.01563)" />
        </pattern>
        <image
          id="prefix__image0_405:300"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABIdJREFUeF7tWE1oXVUQnm9u8l5eodafgqJNSypkYWJdKCpxo+KqEKoQEFQQXAmmtEslCAoSl/4UshOloouAgg3iQqQIQuNCwYhkk6i0PBShRbFirrlnRm7xhZvnvefn3mz63nnLd745M/PNN3POPaAh/2HI86dIQFTAkDMQW2DIBRCHYGyB2AJDzkBsgSEXQDwFYgvEFhhyBmILDLkA4ikQW2AvWkBELhPRzTX3Msw84mMrIsrMXkXLsVV7qupykiRP5utem9mCS9P07tHR0TWfBKowAJ4D8K5tD1V9TFU/T9P0SKfTuWjDGmNeB/BiBSYnkXtrjQkQkYyIkiYE5LauyhYq6lLMiIhsW8g+BuD7PSFAVRdU9bWmyf9nf46ZT5TtZYw5A2B+J2jgNIC3yrAicomIDlXF1E90IwXY+qwOKVUqKPMTgi3E8gkzP16MrTYBInKBiB6sk6jF5jdmvrW4LiK/ENFtJTbnmfnR4v+qelpV3/CtfqMh6Kh+Phe8Jnt/sMXKqmpbRN6sSAhJkjzfR1bl5AdwHMBn/XvVUoAteQALABYbtMcVZr4lVFkOf+vMfFfZnsEEiMjHRPSES2bGmLcBnAxNJMdvb29Pt9vtH3xtsyw7zsyfumLaKwIqZUZEl5j5cM9RAxU4j0Vf6avqq0mSvFJ5LPqynONU9X5V/drCdH4fkN66qj6gqqshPnpYAC8DcB6xDkW67gxhN0ERyZMrbRtVXUySZKE/WRH5nYgO1CHBdTlaXl5uzc3NpVV7p2l6tNPp/GTz7T0DjDHv5FfWOn3WoBUuMPNMlU8R+YuI9lWsp8w85iLemwDH5L8XwLeWQL8ioodcwZStr6+v75+amrrav6aqd6rqRp2CFG28CHB97bmkmjtsoII/mfmGktayDeMvmflhH8KdBKjqvKqeacq0qt6uql2foEowHzHzXOF0yY/I0nOdiP5h5ravHycBtsqJyDMjIyMf+DoTkZ+J6IgvvojrqWxtbe2m6enpK00LsnPa2IIRke+I6NheOWvYCl1mPuRqJZ929J4BNmdLS0sH5+fn85egoJ8rAeuRBdxhayMATwP4MCSgyhZwBHqZmQ8WHdnwxapsbW0dbbVamyFBemIzZh71xO7Aqi41E6r6Y9Vmk5OTYxsbG7suICLyBRHt+jzN7bvd7j3j4+O7nsxE5Fci2vXZGxp4Px7AGIDKS1HV/qUEiIjJX6nKjFT1bJIkz5atlajgKjPv98Q24eAiM9carv8jwBizCOClOoNPVU+p6s73++rq6r6ZmZm/y/YyxrwHoJTIUCZCB591CDqek5eSJHnBcXJcu6AAOAHgnANru8p68ZBl2X2tVusbL3AJaJcCXN/wPkxnWfYUM7/PzM6X4s3NzQMTExP5x1Ld3x/MfGNd42uF6pvk5yuHBXAKgNf7/8rKyuHZ2Vnr233PjzHmLIDxOkkw8yN17Kwt0HTD683eeRW+3hIKjTcSEMrYoOGjAgatoqH5RAWEMjZo+KiAQatoaD5RAaGMDRo+KmDQKhqaT1RAKGODhh96BfwLmGm5UP4uIw8AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  ) : name === "close-modal" ? (
    <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={24} cy={24} r={24} fill="#EDEDED" />
      <path
        d="M16.081 16l8.095 8.095-8.095 8.095"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M32.108 16l-8.095 8.095 8.095 8.095"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  ) : name === "magnet" ? (
    <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.5 24v10.5a7.5 7.5 0 11-15 0V24h-6v10.5C10.5 41.956 16.544 48 24 48s13.5-6.044 13.5-13.5V24h-6zM24 9a1.501 1.501 0 010-3c.828 0 1.5.672 1.5 1.5h3c0-1.956-1.256-3.605-3-4.225V0h-3v3.275c-1.744.62-3 2.269-3 4.225A4.5 4.5 0 0024 12a1.501 1.501 0 010 3c-.828 0-1.5-.672-1.5-1.5h-3c0 1.957 1.256 3.605 3 4.225V21h3v-3.275c1.744-.62 3-2.269 3-4.225A4.5 4.5 0 0024 9z"
        fill="#01DE81"
      />
      <path
        d="M31.5 18h6v6h-6v-6zM10.5 18h6v6h-6v-6zM10.5 24h6v3h-6v-3zM31.5 24h6v3h-6v-3zM13.5 6h3v9h-3V6zM31.5 6h3v9h-3V6zM37.5 0h3v9h-3V0zM7.5 0h3v9h-3V0z"
        fill="#06AA65"
      />
    </svg>
  ) : name === "ChevronLeft" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 455 455"
      width={size}
      height={size}
    >
      <path d="M227.5 0C101.855 0 0 101.855 0 227.5S101.855 455 227.5 455 455 353.145 455 227.5 353.145 0 227.5 0zm49.272 334.411l-21.248 21.178L127.852 227.5 255.524 99.411l21.248 21.178L170.209 227.5l106.563 106.911z" 
            fill="gray"
      />
    </svg>
  ) : name === "metamask" ? (
    <svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 404 420.2"
      width={size}
      height={size}
    >
      <style>
        {
          ".prefix__st0{fill:#e4761b;stroke:#e4761b}.prefix__st1{fill:#f6851b;stroke:#f6851b}.prefix__st2{fill:#763d16;stroke:#763d16}.prefix__st3{fill:#e2761b;stroke:#e2761b}.prefix__st4{fill:#c0ad9e;stroke:#c0ad9e}.prefix__st5{fill:#cd6116;stroke:#cd6116}.prefix__st6{fill:#e4751f;stroke:#e4751f}.prefix__st7{fill:#233447;stroke:#233447}.prefix__st8{fill:#d7c1b3;stroke:#d7c1b3}.prefix__st9{fill:#161616;stroke:#161616}"
        }
      </style>
      <path className="prefix__st0" d="M382.9 290.9l-24.4 82.5-47.9-13.1z" />
      <path className="prefix__st0" d="M310.6 360.3l46.2-63.3 26.1-6.1z" />
      <path
        className="prefix__st1"
        d="M347 228.7l35.9 62.2-26.1 6.1zm0 0l23.1-16 12.8 78.2z"
      />
      <path
        className="prefix__st2"
        d="M317.6 181.7l66.4-27.2-3.3 14.9zm61 5.6l-61-5.6 63.1-12.3zM378.6 187.3l-8.5 25.4-52.5-31zm13.3-26.5l-11.2 8.6 3.3-14.9zm-13.3 26.5l2.1-17.9 8.9 7.4z"
      />
      <path className="prefix__st3" d="M259.1 340.2l16.6 5.3 34.9 14.8z" />
      <path
        className="prefix__st2"
        d="M370.1 212.7l8.5-25.4 7.3 5.6zm0 0L301.2 190l16.4-8.3z"
      />
      <path className="prefix__st2" d="M334 103.8l-16.4 77.9-16.4 8.3z" />
      <path className="prefix__st2" d="M384 154.5l-66.4 27.2 16.4-77.9z" />
      <path className="prefix__st2" d="M334 103.8l69.3-8-19.3 58.7z" />
      <path className="prefix__st1" d="M370.1 212.7l-23.1 16-45.8-38.7z" />
      <path className="prefix__st2" d="M400.3 39.7l3 56.1-69.3 8z" />
      <path className="prefix__st3" d="M400.3 39.7L261.8 140.4 260 72.1z" />
      <path className="prefix__st1" d="M157 63.9l103 8.2 1.8 68.3z" />
      <path className="prefix__st2" d="M301.2 190l-39.4-49.6 72.2-36.6z" />
      <path className="prefix__st0" d="M301.2 190l45.8 38.7-64.3 7.1z" />
      <path className="prefix__st0" d="M282.7 235.8l-20.9-95.4 39.4 49.6z" />
      <path className="prefix__st2" d="M334 103.8l-72.2 36.6L400.3 39.7z" />
      <path className="prefix__st4" d="M157.9 358.7l32.7 34.1-44.5-40.5z" />
      <path className="prefix__st5" d="M310.6 360.3l15.5-58.9 30.7-4.4z" />
      <path className="prefix__st3" d="M25.3 194.6l56.6-59.5-49.3 52.4z" />
      <path
        className="prefix__st1"
        d="M356.8 297l-30.7 4.4 20.9-72.7zm-95-156.6l-55.1-1.8L157 63.9z"
      />
      <path className="prefix__st6" d="M347 228.7l-20.9 72.7-1.7-35.5z" />
      <path className="prefix__st5" d="M282.7 235.8l64.3-7.1-22.6 37.2z" />
      <path className="prefix__st1" d="M206.7 138.6l55.1 1.8 20.9 95.4z" />
      <path
        className="prefix__st0"
        d="M206.7 138.6L58 1l99 62.9zm-49.8 241l-129.2 40-25.8-98.5z"
      />
      <path className="prefix__st2" d="M44.5 219.2l48.8-38.3 40.9 9.5z" />
      <path className="prefix__st2" d="M134.2 190.4l-40.9-9.5 21.9-90.4z" />
      <path className="prefix__st2" d="M32.6 187.5l60.7-6.6-48.8 38.3z" />
      <path className="prefix__st5" d="M324.4 265.9l-25.2-12.7-16.5-17.4z" />
      <path className="prefix__st2" d="M32.6 187.5l-4.3-22.7 65 16.1z" />
      <path className="prefix__st7" d="M294 281.8l5.2-28.6 25.2 12.7z" />
      <path className="prefix__st1" d="M326.1 301.4L294 281.8l30.4-15.9z" />
      <path
        className="prefix__st2"
        d="M93.3 180.9l-65-16.1-5.3-19.1zm21.9-90.4l-21.9 90.4L23 145.7zm0 0l91.5 48.1-72.5 51.8z"
      />
      <path
        className="prefix__st0"
        d="M134.2 190.4l72.5-51.8 32.3 98.7zM239 237.3l-100.2-2.1-4.6-44.8z"
      />
      <path
        className="prefix__st1"
        d="M44.5 219.2l89.7-28.8 4.6 44.8zm238.2 16.6l-43.7 1.5-32.3-98.7z"
      />
      <path className="prefix__st5" d="M299.2 253.2l-5.2 28.6-11.3-46z" />
      <path className="prefix__st2" d="M58 1l148.7 137.6-91.5-48.1z" />
      <path className="prefix__st0" d="M1.9 321.1l125.4-5.2 29.6 63.7z" />
      <path className="prefix__st5" d="M156.9 379.6l-29.6-63.7 61.6-3z" />
      <path
        className="prefix__st1"
        d="M294 281.8l32.1 19.6 17.7 41.7zm-155.2-46.6L1.9 321.1l42.6-101.9zm-11.5 80.7L1.9 321.1l136.9-85.9zm155.4-80.1l8.2 29.8-39.6 2.3zm-31.4 32.1L239 237.3l43.7-1.5z"
      />
      <path className="prefix__st4" d="M190.6 392.8l-33.7-13.2 117.2 19.7z" />
      <path className="prefix__st2" d="M44.5 219.2l-19.2-24.6 7.3-7.1z" />
      <path className="prefix__st8" d="M287.4 384.7l-13.3 14.6-117.2-19.7z" />
      <path className="prefix__st0" d="M293.7 348.9l-136.8 30.7 32-66.7z" />
      <path className="prefix__st8" d="M156.9 379.6l136.8-30.7-6.3 35.8z" />
      <path
        className="prefix__st2"
        d="M23 145.7l-4.5-76.9 96.7 21.7zm9.6 41.8L19.3 174l9-9.2z"
      />
      <path className="prefix__st5" d="M216.6 257.1l22.4-19.8-3.2 48.4z" />
      <path className="prefix__st5" d="M239 237.3l-22.4 19.8L184 274z" />
      <path className="prefix__st1" d="M343.8 343.1l-6.1-4.5-43.7-56.8z" />
      <path className="prefix__st5" d="M184 274l-45.2-38.8 100.2 2.1z" />
      <path className="prefix__st6" d="M235.8 285.7l3.2-48.4 12.3 30.6z" />
      <path className="prefix__st2" d="M14.9 153.3l8.1-7.6 5.3 19.1z" />
      <path className="prefix__st7" d="M235.8 285.7L184 274l32.6-16.9z" />
      <path className="prefix__st2" d="M115.2 90.5L18.5 68.8 58 1z" />
      <path className="prefix__st4" d="M274.1 399.3l5.5 15-89-21.5z" />
      <path className="prefix__st1" d="M188.9 312.9L184 274l51.8 11.7z" />
      <path className="prefix__st6" d="M138.8 235.2L184 274l4.9 38.9z" />
      <path
        className="prefix__st1"
        d="M251.3 267.9l39.6-2.3 46.8 73zm-112.5-32.7l50.1 77.7-61.6 3z"
      />
      <path className="prefix__st6" d="M251.3 267.9l49.2 74.9-64.7-57.1z" />
      <path className="prefix__st1" d="M235.8 285.7l64.7 57.1-6.8 6.1z" />
      <path
        className="prefix__st1"
        d="M293.7 348.9l-104.8-36 46.9-27.2zm44-10.3l-37.2 4.2-49.2-74.9z"
      />
      <path
        className="prefix__st4"
        d="M347.5 373.8l-16 32.1-51.9 8.4zm-67.9 40.5l-5.5-15 13.3-14.6z"
      />
      <path
        className="prefix__st4"
        d="M287.4 384.7l9.8-3.9-17.6 33.5zm-7.8 29.6l17.6-33.5 50.3-7z"
      />
      <path className="prefix__st9" d="M337.7 338.6l12.3 7.5-37.4 4.5z" />
      <path
        className="prefix__st9"
        d="M312.6 350.6l-12.1-7.8 37.2-4.2zm-4.3 5.9l45.5-5.5-6.3 22.8z"
      />
      <path
        className="prefix__st9"
        d="M347.5 373.8l-50.3 7 11.1-24.3zm-50.3 7l-9.8 3.9 6.3-35.8zm-3.5-31.9l6.8-6.1 12.1 7.8zm56.3-2.8l3.8 4.9-45.5 5.5z"
      />
      <path
        className="prefix__st9"
        d="M308.3 356.5l4.3-5.9 37.4-4.5zm-14.6-7.6l14.6 7.6-11.1 24.3z"
      />
      <path className="prefix__st9" d="M312.6 350.6l-4.3 5.9-14.6-7.6z" />
    </svg>
  ) : name === "walletConnect" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 185"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.439 36.256c48.91-47.888 128.212-47.888 177.123 0l5.886 5.764a6.041 6.041 0 010 8.67l-20.136 19.716a3.179 3.179 0 01-4.428 0l-8.101-7.931c-34.122-33.408-89.444-33.408-123.566 0l-8.675 8.494a3.179 3.179 0 01-4.428 0L54.978 51.253a6.041 6.041 0 010-8.67l6.46-6.327zM280.206 77.03l17.922 17.547a6.041 6.041 0 010 8.67l-80.81 79.122c-2.446 2.394-6.41 2.394-8.856 0l-57.354-56.155a1.59 1.59 0 00-2.214 0L91.54 182.37c-2.446 2.394-6.411 2.394-8.857 0L1.872 103.247a6.041 6.041 0 010-8.671l17.922-17.547c2.445-2.394 6.41-2.394 8.856 0l57.355 56.155a1.59 1.59 0 002.214 0L145.57 77.03c2.446-2.394 6.41-2.395 8.856 0l57.355 56.155a1.59 1.59 0 002.214 0L271.35 77.03c2.446-2.394 6.41-2.394 8.856 0z"
        fill="#3B99FC"
        fillRule="nonzero"
      />
    </svg>
  ) : name === "alert" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 506.4 506.4"
      width={size}
      height={size}
    >
      <circle cx={253.2} cy={253.2} r={249.2} fill="#df5c4e" />
      <g fill="#f4efef">
        <path d="M253.2 332.4c-10.8 0-20-8.8-20-19.6v-174c0-10.8 9.2-19.6 20-19.6s20 8.8 20 19.6v174c0 10.8-9.2 19.6-20 19.6zM253.2 395.6c-5.2 0-10.4-2-14-5.6s-5.6-8.8-5.6-14 2-10.4 5.6-14 8.8-6 14-6 10.4 2 14 6c3.6 3.6 6 8.8 6 14s-2 10.4-6 14c-3.6 3.6-8.8 5.6-14 5.6z" />
      </g>
      <path d="M253.2 506.4C113.6 506.4 0 392.8 0 253.2S113.6 0 253.2 0s253.2 113.6 253.2 253.2-113.6 253.2-253.2 253.2zm0-498.4C118 8 8 118 8 253.2s110 245.2 245.2 245.2 245.2-110 245.2-245.2S388.4 8 253.2 8z" />
      <path fill="#fff" d="M249.2 336.4c-13.2 0-24-10.8-24-23.6v-174c0-13.2 10.8-23.6 24-23.6s24 10.8 24 23.6v174c0 12.8-10.8 23.6-24 23.6zm0-213.6c-8.8 0-16 7.2-16 15.6v174c0 8.8 7.2 15.6 16 15.6s16-7.2 16-15.6v-174c0-8.4-7.2-15.6-16-15.6zM249.2 399.6c-6.4 0-12.4-2.4-16.8-6.8s-6.8-10.4-6.8-16.8 2.4-12.4 6.8-16.8 10.8-6.8 16.8-6.8c6.4 0 12.4 2.4 16.8 6.8s6.8 10.4 6.8 16.8-2.4 12.4-7.2 16.8c-4 4.4-10 6.8-16.4 6.8zm0-39.6c-4 0-8.4 1.6-11.2 4.8-2.8 2.8-4.4 6.8-4.4 11.2 0 4 1.6 8.4 4.8 11.2 2.8 2.8 7.2 4.8 11.2 4.8s8.4-1.6 11.2-4.8c2.8-2.8 4.8-7.2 4.8-11.2s-1.6-8.4-4.8-11.2c-3.6-3.2-7.6-4.8-11.6-4.8z" />
    </svg>
  ) : name === "padlock" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12.5V16H8.75A4.75 4.75 0 004 20.75v18.5A4.75 4.75 0 008.75 44h22.5c.19 0 .376-.011.56-.033-.416-.306-.851-.655-1.288-1.048C28.37 40.982 26 37.796 26 33.25v-5.41a2.75 2.75 0 012.598-2.747h.011a10.94 10.94 0 00.344-.028c.242-.021.579-.056.954-.11.828-.118 1.554-.287 1.933-.459.277-.125.785-.479 1.356-.953a18.32 18.32 0 00.813-.72l.043-.04.007-.007A2.743 2.743 0 0136 22v-1.25A4.75 4.75 0 0031.25 16H28v-3.5a8 8 0 10-16 0zM20 7a5.5 5.5 0 015.5 5.5V16h-11v-3.5A5.5 5.5 0 0120 7zm3 23a3 3 0 11-6 0 3 3 0 016 0z"
        fill="#212121"
      />
      <path
        d="M28 27.76v5.74c0 6.483 6.314 9.798 7.722 10.456a.642.642 0 00.553 0C37.684 43.302 44 40.01 44 33.713V27.76a.78.78 0 00-.76-.771c-.962-.033-2.627-.154-3.741-.589-1.036-.404-2.233-1.47-2.925-2.145a.83.83 0 00-1.149 0c-.692.675-1.89 1.74-2.925 2.145-1.113.435-2.778.556-3.74.589a.78.78 0 00-.76.771z"
        fill="#212121"
      />
    </svg>
  ) : name === "lock" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      width={size}
      height={size}
    >
      <path d="M65 330h200c8.284 0 15-6.716 15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85S80 38.131 80 85v45H65c-8.284 0-15 6.716-15 15v170c0 8.284 6.716 15 15 15zm142.481-110.644l-42.5 42.5c-2.929 2.929-6.768 4.394-10.606 4.394s-7.678-1.465-10.606-4.394l-21.25-21.25c-5.858-5.858-5.858-15.354 0-21.213 5.857-5.858 15.355-5.858 21.213 0l10.644 10.643 31.894-31.893c5.857-5.858 15.355-5.858 21.213 0 5.857 5.859 5.857 15.355-.002 21.213zM110 85c0-30.327 24.673-55 55-55s55 24.673 55 55v45H110V85z" />
    </svg>
  ) : null;
};

export default Icons;
