/*Arreglo con la ruta, nombre e icono a mostrar de cada módulo*/

export const AdminLinks = [
  {
    to: "/main",
    text: "Reportes",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 11.1111H8.88889V0H0V11.1111ZM0 20H8.88889V13.3333H0V20ZM11.1111 20H20V8.88889H11.1111V20ZM11.1111 0V6.66667H20V0H11.1111Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    to: "/staff",
    text: "Mensajeros",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        height="25px"
        width="25px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path d="M128.804,337.367c-4.498-3.803-11.229-3.242-15.033,1.259c-1.504,1.779-2.96,3.567-4.327,5.312     c-3.63,4.64-2.813,11.344,1.825,14.974c1.951,1.53,4.268,2.269,6.568,2.269c3.168,0,6.303-1.404,8.406-4.092     c1.202-1.535,2.486-3.113,3.819-4.688C133.865,347.902,133.303,341.172,128.804,337.367z" />
              <path d="M255.999,64.003c1.827,0,3.639,0.059,5.388,0.173c0.24,0.017,0.475,0.022,0.71,0.022c5.571,0,10.262-4.328,10.634-9.967     c0.385-5.88-4.067-10.958-9.946-11.344c-2.212-0.144-4.494-0.219-6.785-0.219c-5.891,0-10.667,4.778-10.667,10.667     C245.332,59.228,250.108,64.003,255.999,64.003z" />
              <path d="M501.333,490.666h-16v-32.002c0-43.002-11.974-84.925-34.632-121.236c-20.221-32.404-48.173-59.207-81.22-78.057     c4.258-11.181,7.694-26.234,11.285-48.05c0.571-3.469,1.178-6.378,1.88-9.746c0.746-3.579,1.619-7.758,2.625-13.539h7.404     c5.889,0,10.667-4.775,10.667-10.667c0-11.493-4.586-21.408-12.596-29.819c0.027-0.245,0.057-0.49,0.081-0.723     c0.631-5.517,0.823-7.254,0.868-8.144c0.825-15.448-0.175-27.637-3.052-37.261c-9.25-30.973-26.804-56.815-50.763-74.735     C314.543,9.23,286.228,0.001,256.001,0.001c-30.227,0-58.542,9.229-81.884,26.688c-23.958,17.921-41.512,43.762-50.762,74.732     c-2.827,9.456-3.841,21.358-3.1,36.377c0.051,1.049,0.31,3.688,0.848,9.049c0.026,0.254,0.052,0.516,0.078,0.779     c-7.969,8.394-12.527,18.284-12.527,29.744c0,5.891,4.777,10.667,10.667,10.667h7.404c0.992,5.698,1.845,9.801,2.629,13.556     c0.701,3.362,1.308,6.267,1.877,9.733c3.591,21.815,7.027,36.865,11.284,48.046c-33.045,18.85-60.998,45.652-81.217,78.059     c-22.655,36.31-34.632,78.233-34.632,121.233v32.002h-16C4.776,490.666,0,495.441,0,501.332c0,5.889,4.776,10.667,10.667,10.667     h26.667h79.998h277.332h80.003h26.667c5.892,0,10.667-4.778,10.667-10.667C512,495.441,507.226,490.666,501.333,490.666z      M143.797,107.527c15.88-53.165,58.874-86.192,112.204-86.192c53.329,0,96.324,33.027,112.202,86.197     c1.867,6.24,2.665,14.739,2.385,25.244c-6.328-3.381-13.383-6.363-21.012-8.953c-0.689-6.723-2.538-12.538-2.833-13.434     c-9.027-27.386-27.096-48.452-50.877-59.319c-5.36-2.446-11.688-0.09-14.136,5.269c-2.448,5.358-0.09,11.688,5.268,14.136     c18.317,8.369,32.337,24.916,39.482,46.584c0.046,0.144,0.096,0.304,0.148,0.47c-21.788-4.75-46.243-7.04-70.63-7.04     c-42.978,0-86.176,7.104-114.584,22.282C141.135,122.242,141.934,113.759,143.797,107.527z M133.25,166.701     c6.697-10.604,22.225-17.74,32.446-21.475c23.302-8.518,56.217-13.404,90.303-13.404c34.086,0,67,4.885,90.302,13.404     c10.221,3.735,25.75,10.87,32.446,21.475H133.25z M363.597,188.035c-0.667,3.585-1.27,6.481-1.834,9.183     c-0.721,3.458-1.402,6.723-2.046,10.642c-8.958,54.409-14.608,58-38.389,73.128c-3.971,2.525-8.459,5.379-13.454,8.761     c-34.425,19.748-69.322,19.75-103.746,0.004c-4.998-3.383-9.487-6.238-13.457-8.763c-23.783-15.13-29.433-18.723-38.39-73.13     c-0.644-3.913-1.323-7.173-2.043-10.623c-0.564-2.706-1.168-5.606-1.837-9.202H363.597z M383.997,490.666H127.998v-42.669     h117.336v21.336c0,5.889,4.776,10.667,10.667,10.667c5.889,0,10.667-4.778,10.667-10.667v-21.336h117.33V490.666z      M147.745,426.663l26.667-21.331h70.923v21.331H147.745z M266.668,426.663v-21.331h70.921l26.669,21.331H266.668z      M463.997,490.663h-58.669v-52.838c0.006-0.166,0.025-0.33,0.025-0.496c0-3.31-1.521-6.258-3.89-8.214     c-0.015-0.013-0.029-0.023-0.044-0.035c-0.169-0.138-0.331-0.286-0.509-0.413l-52.921-42.331     c-1.889-1.513-4.24-2.337-6.662-2.337H170.669c-2.422,0-4.772,0.825-6.663,2.337l-53.336,42.665     c-0.018,0.015-0.034,0.031-0.051,0.046c-0.094,0.075-0.182,0.157-0.273,0.236c-0.15,0.131-0.298,0.262-0.439,0.4     c-0.09,0.085-0.175,0.175-0.26,0.265c-0.138,0.142-0.269,0.288-0.396,0.435c-0.08,0.092-0.159,0.183-0.236,0.279     c-0.131,0.162-0.254,0.33-0.374,0.5c-0.063,0.088-0.128,0.171-0.189,0.26c-0.161,0.244-0.313,0.494-0.453,0.748     c-0.069,0.125-0.13,0.254-0.195,0.383c-0.071,0.144-0.144,0.289-0.21,0.437c-0.066,0.148-0.127,0.298-0.187,0.45     c-0.053,0.135-0.103,0.273-0.151,0.411c-0.053,0.157-0.108,0.313-0.154,0.47c-0.049,0.166-0.09,0.337-0.13,0.507     c-0.051,0.212-0.097,0.427-0.135,0.645c-0.036,0.206-0.07,0.411-0.095,0.617c-0.015,0.129-0.023,0.258-0.034,0.387     c-0.017,0.208-0.027,0.419-0.031,0.629c-0.002,0.075-0.012,0.148-0.012,0.223v53.336H48v-32.002     c0-75.244,39.945-143.618,104.871-180.67c4.748,5.832,10.476,10.44,17.706,15.353c-10.476,5.427-20.483,11.865-29.751,19.156     c-4.63,3.644-5.43,10.35-1.787,14.979c2.105,2.675,5.231,4.07,8.389,4.07c2.308,0,4.635-0.746,6.589-2.286     c8.397-6.606,17.477-12.429,26.988-17.305l10.164-5.211c0.44,0.295,0.865,0.575,1.311,0.877c0.213,0.144,0.431,0.282,0.654,0.411     c20.606,11.896,41.746,17.932,62.831,17.935c0.011,0,0.019,0,0.029,0c21.096,0,42.25-6.035,62.869-17.939     c0.223-0.129,0.439-0.264,0.652-0.411c4.868-3.302,9.327-6.135,13.261-8.638c11.51-7.321,19.85-13.01,26.35-20.994     c64.927,37.054,104.871,105.426,104.871,180.67V490.663z" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    to: "/customers",
    text: "Clientes",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    to: "/services",
    text: "Servicios",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path d="M458.671,214.24v-11.571c0-17.645-14.354-32-32-32H320v-53.337c0-5.891-4.775-10.667-10.667-10.667h-32.001V74.67     c0-5.891-4.776-10.667-10.667-10.667H121.759L103.545,45.79c-4.164-4.165-10.918-4.165-15.084,0l-60.878,60.875H10.667     C4.776,106.666,0,111.441,0,117.332v298.668c0,5.89,4.776,10.667,10.667,10.667h43.739c1.605,7.878,4.954,15.129,9.622,21.333     H42.666C36.775,448,32,452.777,32,458.667s4.775,10.667,10.667,10.667h63.997c0.027,0,0.052-0.004,0.079-0.004     c25.72-0.037,47.231-18.373,52.181-42.662h150.409h43.747c1.605,7.878,4.955,15.129,9.623,21.333H341.34     c-5.89,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667h63.997c0.027,0,0.053-0.004,0.08-0.004     c25.72-0.037,47.231-18.373,52.181-42.662h43.735c5.891,0,10.667-4.776,10.667-10.667v-96.001v-42.669     C512,245.679,488.896,219.336,458.671,214.24z M255.999,85.337v21.329h-91.576l-21.33-21.329H255.999z M96.003,68.417     l13.788,13.787c0.005,0.005,0.011,0.011,0.016,0.016l24.446,24.446H57.754L96.003,68.417z M106.666,447.998     c-17.646,0-32.001-14.354-32.001-31.998c0-17.646,14.355-32.002,32.001-32.002c17.644,0,31.998,14.356,31.998,32.002     C138.663,433.644,124.309,447.998,106.666,447.998z M298.666,181.336v181.332h-72.543c-5.891,0-10.667,4.776-10.667,10.667     s4.775,10.667,10.667,10.667h72.543v21.333H158.924c-4.955-24.316-26.503-42.668-52.258-42.668     c-25.755,0-47.306,18.353-52.261,42.668H21.333V234.668h42.665c5.89,0,10.667-4.775,10.667-10.667     c0-5.891-4.776-10.667-10.667-10.667H21.333v-21.332H149.33c5.891,0,10.667-4.775,10.667-10.667     c0-5.891-4.775-10.667-10.667-10.667H21.333v-42.671h10.66c0.006,0,0.012,0,0.017,0h266.656V181.336z M353.08,405.334H320     v-21.333h42.701C358.032,390.206,354.684,397.456,353.08,405.334z M437.337,416.035c-0.019,17.629-14.366,31.963-31.998,31.963     c-17.645,0-32.001-14.354-32.001-31.998c0-17.619,14.311-31.955,31.919-32h0.08c0.01,0,0.019-0.001,0.028-0.001     c17.621,0.014,31.953,14.346,31.972,31.967c0,0.012-0.001,0.022-0.001,0.034C437.336,416.012,437.337,416.023,437.337,416.035z      M490.667,405.334h-33.069c-4.956-24.316-26.504-42.668-52.259-42.668c-0.028,0-0.055,0.002-0.082,0.002h-85.258V192.003h106.672     c5.882,0,10.667,4.785,10.667,10.667v10.666h-74.666c-5.89,0-10.667,4.775-10.667,10.667v95.998     c0,5.891,4.776,10.667,10.667,10.667h127.995V405.334z M394.673,234.668v74.665h-21.334v-74.665H394.673z M490.667,309.333     h-74.661v-74.665h31.999c23.524,0,42.662,19.138,42.662,42.663V309.333z" />
              <path d="M184.397,384.001h6.658c5.89,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667h-6.658     c-5.891,0-10.667,4.776-10.667,10.667S178.507,384.001,184.397,384.001z" />
              <path d="M184.397,192.003h6.658c5.89,0,10.667-4.775,10.667-10.667c0-5.891-4.776-10.667-10.667-10.667h-6.658     c-5.891,0-10.667,4.775-10.667,10.667C173.731,187.227,178.507,192.003,184.397,192.003z" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    to: "/profile",
    text: "Mi perfil",
    svg: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 20 20"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85794 14.1421 2.50002 10 2.50002C5.85794 2.50002 2.50002 5.85794 2.50002 10C2.50002 14.1421 5.85794 17.5 10 17.5ZM10 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6025 1.66669 10 1.66669C5.39752 1.66669 1.66669 5.39752 1.66669 10C1.66669 14.6025 5.39752 18.3334 10 18.3334Z"
          fill="white"
        />
        <path
          d="M5 14.8459C5 14.4154 5.32167 14.0517 5.75 14.0042C8.96458 13.6484 11.05 13.6804 14.2575 14.0121C14.4177 14.0289 14.5695 14.092 14.6944 14.1937C14.8193 14.2954 14.9119 14.4312 14.9608 14.5847C15.0098 14.7381 15.013 14.9025 14.9701 15.0577C14.9272 15.2129 14.84 15.3523 14.7192 15.4588C10.9338 18.7584 8.77042 18.7129 5.26667 15.4621C5.09583 15.3038 5 15.0784 5 14.8459Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2146 14.4263C11.0325 14.0971 8.97713 14.0663 5.79546 14.4184C5.69073 14.4306 5.59418 14.481 5.52429 14.5599C5.45441 14.6389 5.4161 14.7408 5.41671 14.8463C5.41671 14.9654 5.46629 15.0784 5.55004 15.1567C7.28671 16.7675 8.60254 17.4954 9.88879 17.5C11.1796 17.5046 12.5663 16.7825 14.4455 15.145C14.5052 15.0919 14.5481 15.0226 14.5692 14.9455C14.5902 14.8684 14.5884 14.7868 14.5639 14.7107C14.5395 14.6346 14.4934 14.5673 14.4314 14.5168C14.3694 14.4664 14.2941 14.4347 14.2146 14.4263ZM5.70421 13.59C8.95254 13.2304 11.0684 13.2629 14.3009 13.5975C14.5418 13.6227 14.7702 13.7175 14.9581 13.8705C15.146 14.0235 15.2852 14.2279 15.3587 14.4587C15.4322 14.6896 15.4367 14.9369 15.3719 15.1703C15.307 15.4037 15.1755 15.6131 14.9934 15.7729C13.0871 17.4346 11.4996 18.3396 9.88629 18.3334C8.26838 18.3275 6.75088 17.4071 4.98379 15.7675C4.85727 15.6497 4.75641 15.507 4.68752 15.3484C4.61862 15.1899 4.58317 15.0188 4.58338 14.8459C4.58277 14.5352 4.69679 14.2353 4.90361 14.0034C5.11043 13.7716 5.3955 13.6247 5.70421 13.59Z"
          fill="white"
        />
        <path
          d="M13.3334 8.33333C13.3334 9.21739 12.9822 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11597 11.6667 8.26812 11.3155 7.643 10.6904C7.01788 10.0652 6.66669 9.21739 6.66669 8.33333C6.66669 7.44928 7.01788 6.60143 7.643 5.97631C8.26812 5.35119 9.11597 5 10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9822 6.60143 13.3334 7.44928 13.3334 8.33333Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 10.8333C10.6631 10.8333 11.2989 10.5699 11.7678 10.1011C12.2366 9.63226 12.5 8.99637 12.5 8.33333C12.5 7.67029 12.2366 7.03441 11.7678 6.56557C11.2989 6.09673 10.6631 5.83333 10 5.83333C9.33698 5.83333 8.70109 6.09673 8.23225 6.56557C7.76341 7.03441 7.50002 7.67029 7.50002 8.33333C7.50002 8.99637 7.76341 9.63226 8.23225 10.1011C8.70109 10.5699 9.33698 10.8333 10 10.8333ZM10 11.6667C10.8841 11.6667 11.7319 11.3155 12.357 10.6904C12.9822 10.0652 13.3334 9.21739 13.3334 8.33333C13.3334 7.44928 12.9822 6.60143 12.357 5.97631C11.7319 5.35119 10.8841 5 10 5C9.11597 5 8.26812 5.35119 7.643 5.97631C7.01788 6.60143 6.66669 7.44928 6.66669 8.33333C6.66669 9.21739 7.01788 10.0652 7.643 10.6904C8.26812 11.3155 9.11597 11.6667 10 11.6667Z"
          fill="black"
        />
      </svg>
    ),
  },
];

export const MessengersLinks = [
  {
    to: "/customers",
    text: "Clientes",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    to: "/available_services",
    text: "Servicios disponibles",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16" fill="#FFFFFF">
        <path d="M11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="#FFFFFF" />
        <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    to: "/services",
    text: "Servicios",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path d="M458.671,214.24v-11.571c0-17.645-14.354-32-32-32H320v-53.337c0-5.891-4.775-10.667-10.667-10.667h-32.001V74.67     c0-5.891-4.776-10.667-10.667-10.667H121.759L103.545,45.79c-4.164-4.165-10.918-4.165-15.084,0l-60.878,60.875H10.667     C4.776,106.666,0,111.441,0,117.332v298.668c0,5.89,4.776,10.667,10.667,10.667h43.739c1.605,7.878,4.954,15.129,9.622,21.333     H42.666C36.775,448,32,452.777,32,458.667s4.775,10.667,10.667,10.667h63.997c0.027,0,0.052-0.004,0.079-0.004     c25.72-0.037,47.231-18.373,52.181-42.662h150.409h43.747c1.605,7.878,4.955,15.129,9.623,21.333H341.34     c-5.89,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667h63.997c0.027,0,0.053-0.004,0.08-0.004     c25.72-0.037,47.231-18.373,52.181-42.662h43.735c5.891,0,10.667-4.776,10.667-10.667v-96.001v-42.669     C512,245.679,488.896,219.336,458.671,214.24z M255.999,85.337v21.329h-91.576l-21.33-21.329H255.999z M96.003,68.417     l13.788,13.787c0.005,0.005,0.011,0.011,0.016,0.016l24.446,24.446H57.754L96.003,68.417z M106.666,447.998     c-17.646,0-32.001-14.354-32.001-31.998c0-17.646,14.355-32.002,32.001-32.002c17.644,0,31.998,14.356,31.998,32.002     C138.663,433.644,124.309,447.998,106.666,447.998z M298.666,181.336v181.332h-72.543c-5.891,0-10.667,4.776-10.667,10.667     s4.775,10.667,10.667,10.667h72.543v21.333H158.924c-4.955-24.316-26.503-42.668-52.258-42.668     c-25.755,0-47.306,18.353-52.261,42.668H21.333V234.668h42.665c5.89,0,10.667-4.775,10.667-10.667     c0-5.891-4.776-10.667-10.667-10.667H21.333v-21.332H149.33c5.891,0,10.667-4.775,10.667-10.667     c0-5.891-4.775-10.667-10.667-10.667H21.333v-42.671h10.66c0.006,0,0.012,0,0.017,0h266.656V181.336z M353.08,405.334H320     v-21.333h42.701C358.032,390.206,354.684,397.456,353.08,405.334z M437.337,416.035c-0.019,17.629-14.366,31.963-31.998,31.963     c-17.645,0-32.001-14.354-32.001-31.998c0-17.619,14.311-31.955,31.919-32h0.08c0.01,0,0.019-0.001,0.028-0.001     c17.621,0.014,31.953,14.346,31.972,31.967c0,0.012-0.001,0.022-0.001,0.034C437.336,416.012,437.337,416.023,437.337,416.035z      M490.667,405.334h-33.069c-4.956-24.316-26.504-42.668-52.259-42.668c-0.028,0-0.055,0.002-0.082,0.002h-85.258V192.003h106.672     c5.882,0,10.667,4.785,10.667,10.667v10.666h-74.666c-5.89,0-10.667,4.775-10.667,10.667v95.998     c0,5.891,4.776,10.667,10.667,10.667h127.995V405.334z M394.673,234.668v74.665h-21.334v-74.665H394.673z M490.667,309.333     h-74.661v-74.665h31.999c23.524,0,42.662,19.138,42.662,42.663V309.333z" />
              <path d="M184.397,384.001h6.658c5.89,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667h-6.658     c-5.891,0-10.667,4.776-10.667,10.667S178.507,384.001,184.397,384.001z" />
              <path d="M184.397,192.003h6.658c5.89,0,10.667-4.775,10.667-10.667c0-5.891-4.776-10.667-10.667-10.667h-6.658     c-5.891,0-10.667,4.775-10.667,10.667C173.731,187.227,178.507,192.003,184.397,192.003z" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    to: "/profile",
    text: "Mi perfil",
    svg: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 20 20"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85794 14.1421 2.50002 10 2.50002C5.85794 2.50002 2.50002 5.85794 2.50002 10C2.50002 14.1421 5.85794 17.5 10 17.5ZM10 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6025 1.66669 10 1.66669C5.39752 1.66669 1.66669 5.39752 1.66669 10C1.66669 14.6025 5.39752 18.3334 10 18.3334Z"
          fill="white"
        />
        <path
          d="M5 14.8459C5 14.4154 5.32167 14.0517 5.75 14.0042C8.96458 13.6484 11.05 13.6804 14.2575 14.0121C14.4177 14.0289 14.5695 14.092 14.6944 14.1937C14.8193 14.2954 14.9119 14.4312 14.9608 14.5847C15.0098 14.7381 15.013 14.9025 14.9701 15.0577C14.9272 15.2129 14.84 15.3523 14.7192 15.4588C10.9338 18.7584 8.77042 18.7129 5.26667 15.4621C5.09583 15.3038 5 15.0784 5 14.8459Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2146 14.4263C11.0325 14.0971 8.97713 14.0663 5.79546 14.4184C5.69073 14.4306 5.59418 14.481 5.52429 14.5599C5.45441 14.6389 5.4161 14.7408 5.41671 14.8463C5.41671 14.9654 5.46629 15.0784 5.55004 15.1567C7.28671 16.7675 8.60254 17.4954 9.88879 17.5C11.1796 17.5046 12.5663 16.7825 14.4455 15.145C14.5052 15.0919 14.5481 15.0226 14.5692 14.9455C14.5902 14.8684 14.5884 14.7868 14.5639 14.7107C14.5395 14.6346 14.4934 14.5673 14.4314 14.5168C14.3694 14.4664 14.2941 14.4347 14.2146 14.4263ZM5.70421 13.59C8.95254 13.2304 11.0684 13.2629 14.3009 13.5975C14.5418 13.6227 14.7702 13.7175 14.9581 13.8705C15.146 14.0235 15.2852 14.2279 15.3587 14.4587C15.4322 14.6896 15.4367 14.9369 15.3719 15.1703C15.307 15.4037 15.1755 15.6131 14.9934 15.7729C13.0871 17.4346 11.4996 18.3396 9.88629 18.3334C8.26838 18.3275 6.75088 17.4071 4.98379 15.7675C4.85727 15.6497 4.75641 15.507 4.68752 15.3484C4.61862 15.1899 4.58317 15.0188 4.58338 14.8459C4.58277 14.5352 4.69679 14.2353 4.90361 14.0034C5.11043 13.7716 5.3955 13.6247 5.70421 13.59Z"
          fill="white"
        />
        <path
          d="M13.3334 8.33333C13.3334 9.21739 12.9822 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11597 11.6667 8.26812 11.3155 7.643 10.6904C7.01788 10.0652 6.66669 9.21739 6.66669 8.33333C6.66669 7.44928 7.01788 6.60143 7.643 5.97631C8.26812 5.35119 9.11597 5 10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9822 6.60143 13.3334 7.44928 13.3334 8.33333Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 10.8333C10.6631 10.8333 11.2989 10.5699 11.7678 10.1011C12.2366 9.63226 12.5 8.99637 12.5 8.33333C12.5 7.67029 12.2366 7.03441 11.7678 6.56557C11.2989 6.09673 10.6631 5.83333 10 5.83333C9.33698 5.83333 8.70109 6.09673 8.23225 6.56557C7.76341 7.03441 7.50002 7.67029 7.50002 8.33333C7.50002 8.99637 7.76341 9.63226 8.23225 10.1011C8.70109 10.5699 9.33698 10.8333 10 10.8333ZM10 11.6667C10.8841 11.6667 11.7319 11.3155 12.357 10.6904C12.9822 10.0652 13.3334 9.21739 13.3334 8.33333C13.3334 7.44928 12.9822 6.60143 12.357 5.97631C11.7319 5.35119 10.8841 5 10 5C9.11597 5 8.26812 5.35119 7.643 5.97631C7.01788 6.60143 6.66669 7.44928 6.66669 8.33333C6.66669 9.21739 7.01788 10.0652 7.643 10.6904C8.26812 11.3155 9.11597 11.6667 10 11.6667Z"
          fill="black"
        />
      </svg>
    ),
  },
];

export const CustomerLinks = [
  {
    to: "/staff",
    text: "Mensajeros",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        height="25px"
        width="25px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path d="M128.804,337.367c-4.498-3.803-11.229-3.242-15.033,1.259c-1.504,1.779-2.96,3.567-4.327,5.312     c-3.63,4.64-2.813,11.344,1.825,14.974c1.951,1.53,4.268,2.269,6.568,2.269c3.168,0,6.303-1.404,8.406-4.092     c1.202-1.535,2.486-3.113,3.819-4.688C133.865,347.902,133.303,341.172,128.804,337.367z" />
              <path d="M255.999,64.003c1.827,0,3.639,0.059,5.388,0.173c0.24,0.017,0.475,0.022,0.71,0.022c5.571,0,10.262-4.328,10.634-9.967     c0.385-5.88-4.067-10.958-9.946-11.344c-2.212-0.144-4.494-0.219-6.785-0.219c-5.891,0-10.667,4.778-10.667,10.667     C245.332,59.228,250.108,64.003,255.999,64.003z" />
              <path d="M501.333,490.666h-16v-32.002c0-43.002-11.974-84.925-34.632-121.236c-20.221-32.404-48.173-59.207-81.22-78.057     c4.258-11.181,7.694-26.234,11.285-48.05c0.571-3.469,1.178-6.378,1.88-9.746c0.746-3.579,1.619-7.758,2.625-13.539h7.404     c5.889,0,10.667-4.775,10.667-10.667c0-11.493-4.586-21.408-12.596-29.819c0.027-0.245,0.057-0.49,0.081-0.723     c0.631-5.517,0.823-7.254,0.868-8.144c0.825-15.448-0.175-27.637-3.052-37.261c-9.25-30.973-26.804-56.815-50.763-74.735     C314.543,9.23,286.228,0.001,256.001,0.001c-30.227,0-58.542,9.229-81.884,26.688c-23.958,17.921-41.512,43.762-50.762,74.732     c-2.827,9.456-3.841,21.358-3.1,36.377c0.051,1.049,0.31,3.688,0.848,9.049c0.026,0.254,0.052,0.516,0.078,0.779     c-7.969,8.394-12.527,18.284-12.527,29.744c0,5.891,4.777,10.667,10.667,10.667h7.404c0.992,5.698,1.845,9.801,2.629,13.556     c0.701,3.362,1.308,6.267,1.877,9.733c3.591,21.815,7.027,36.865,11.284,48.046c-33.045,18.85-60.998,45.652-81.217,78.059     c-22.655,36.31-34.632,78.233-34.632,121.233v32.002h-16C4.776,490.666,0,495.441,0,501.332c0,5.889,4.776,10.667,10.667,10.667     h26.667h79.998h277.332h80.003h26.667c5.892,0,10.667-4.778,10.667-10.667C512,495.441,507.226,490.666,501.333,490.666z      M143.797,107.527c15.88-53.165,58.874-86.192,112.204-86.192c53.329,0,96.324,33.027,112.202,86.197     c1.867,6.24,2.665,14.739,2.385,25.244c-6.328-3.381-13.383-6.363-21.012-8.953c-0.689-6.723-2.538-12.538-2.833-13.434     c-9.027-27.386-27.096-48.452-50.877-59.319c-5.36-2.446-11.688-0.09-14.136,5.269c-2.448,5.358-0.09,11.688,5.268,14.136     c18.317,8.369,32.337,24.916,39.482,46.584c0.046,0.144,0.096,0.304,0.148,0.47c-21.788-4.75-46.243-7.04-70.63-7.04     c-42.978,0-86.176,7.104-114.584,22.282C141.135,122.242,141.934,113.759,143.797,107.527z M133.25,166.701     c6.697-10.604,22.225-17.74,32.446-21.475c23.302-8.518,56.217-13.404,90.303-13.404c34.086,0,67,4.885,90.302,13.404     c10.221,3.735,25.75,10.87,32.446,21.475H133.25z M363.597,188.035c-0.667,3.585-1.27,6.481-1.834,9.183     c-0.721,3.458-1.402,6.723-2.046,10.642c-8.958,54.409-14.608,58-38.389,73.128c-3.971,2.525-8.459,5.379-13.454,8.761     c-34.425,19.748-69.322,19.75-103.746,0.004c-4.998-3.383-9.487-6.238-13.457-8.763c-23.783-15.13-29.433-18.723-38.39-73.13     c-0.644-3.913-1.323-7.173-2.043-10.623c-0.564-2.706-1.168-5.606-1.837-9.202H363.597z M383.997,490.666H127.998v-42.669     h117.336v21.336c0,5.889,4.776,10.667,10.667,10.667c5.889,0,10.667-4.778,10.667-10.667v-21.336h117.33V490.666z      M147.745,426.663l26.667-21.331h70.923v21.331H147.745z M266.668,426.663v-21.331h70.921l26.669,21.331H266.668z      M463.997,490.663h-58.669v-52.838c0.006-0.166,0.025-0.33,0.025-0.496c0-3.31-1.521-6.258-3.89-8.214     c-0.015-0.013-0.029-0.023-0.044-0.035c-0.169-0.138-0.331-0.286-0.509-0.413l-52.921-42.331     c-1.889-1.513-4.24-2.337-6.662-2.337H170.669c-2.422,0-4.772,0.825-6.663,2.337l-53.336,42.665     c-0.018,0.015-0.034,0.031-0.051,0.046c-0.094,0.075-0.182,0.157-0.273,0.236c-0.15,0.131-0.298,0.262-0.439,0.4     c-0.09,0.085-0.175,0.175-0.26,0.265c-0.138,0.142-0.269,0.288-0.396,0.435c-0.08,0.092-0.159,0.183-0.236,0.279     c-0.131,0.162-0.254,0.33-0.374,0.5c-0.063,0.088-0.128,0.171-0.189,0.26c-0.161,0.244-0.313,0.494-0.453,0.748     c-0.069,0.125-0.13,0.254-0.195,0.383c-0.071,0.144-0.144,0.289-0.21,0.437c-0.066,0.148-0.127,0.298-0.187,0.45     c-0.053,0.135-0.103,0.273-0.151,0.411c-0.053,0.157-0.108,0.313-0.154,0.47c-0.049,0.166-0.09,0.337-0.13,0.507     c-0.051,0.212-0.097,0.427-0.135,0.645c-0.036,0.206-0.07,0.411-0.095,0.617c-0.015,0.129-0.023,0.258-0.034,0.387     c-0.017,0.208-0.027,0.419-0.031,0.629c-0.002,0.075-0.012,0.148-0.012,0.223v53.336H48v-32.002     c0-75.244,39.945-143.618,104.871-180.67c4.748,5.832,10.476,10.44,17.706,15.353c-10.476,5.427-20.483,11.865-29.751,19.156     c-4.63,3.644-5.43,10.35-1.787,14.979c2.105,2.675,5.231,4.07,8.389,4.07c2.308,0,4.635-0.746,6.589-2.286     c8.397-6.606,17.477-12.429,26.988-17.305l10.164-5.211c0.44,0.295,0.865,0.575,1.311,0.877c0.213,0.144,0.431,0.282,0.654,0.411     c20.606,11.896,41.746,17.932,62.831,17.935c0.011,0,0.019,0,0.029,0c21.096,0,42.25-6.035,62.869-17.939     c0.223-0.129,0.439-0.264,0.652-0.411c4.868-3.302,9.327-6.135,13.261-8.638c11.51-7.321,19.85-13.01,26.35-20.994     c64.927,37.054,104.871,105.426,104.871,180.67V490.663z" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    to: "/offices",
    text: "Sucursales",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        version="1.1"
        id="Capa_1"
        width="20px"
        height="20px"
        viewBox="0 0 476.518 476.518"
        xmlSpace="preserve"
      >
        <g>
          <path d="M276.619,38.115c-2.046-3.158-2.703-5.292-2.703-5.292l0.975-0.897c0,0,1.896,0.788,5.21,2.146   c1.564,0.624,3.479,1.39,5.674,2.254c2.162,0.783,4.515,1.696,7.037,2.308c1.242,0.385,2.507,0.768,3.814,0.915   c0.658,0.087,1.285,0.268,1.937,0.388c0.646,0.044,1.294,0.065,1.938,0.147c2.605,0.35,5,0.067,7.626-0.07   c1.218-0.448,2.572-0.574,3.897-1.144c1.214-0.717,2.801-1.133,3.928-2.052c0.597-0.41,1.217-0.837,1.882-1.259   c0.69-0.388,1.424-0.695,2.157-1.488l4.64-3.896c0.044-0.06-0.271,0.399-0.12,0.185l0.032-0.033l0.079-0.07l0.153-0.131   l0.305-0.273l0.612-0.547l1.217-1.067l2.297-2.178c1.444-1.488,3.261-2.648,4.717-4.082c1.434-1.484,3.361-2.392,4.894-3.831   c1.64-1.292,3.557-2.26,5.406-3.513c3.885-1.828,8.425-3.185,12.49-2.615c1.019,0.109,2.009,0.268,2.983,0.448   c0.942,0.262,1.827,0.586,2.703,0.914c1.794,0.592,3.339,1.439,4.795,2.276c2.909,1.681,5.221,3.628,7.069,5.511   c1.837,1.888,3.218,3.727,4.212,5.33c1.042,1.569,1.644,2.955,2.068,3.902c0.351,0.974,0.536,1.499,0.536,1.499l-0.974,0.908   c0,0-2.089-0.706-5.297-2.047c-1.563-0.623-3.459-1.405-5.635-2.281c-2.101-0.865-4.412-1.817-6.853-2.643   c-1.215-0.449-2.472-0.914-3.742-1.221c-0.645-0.158-1.279-0.411-1.927-0.596c-0.646-0.131-1.29-0.296-1.938-0.509   c-2.621-0.854-5.329-1.696-8.682-2.046c-1.54,0.203-3.379,0.137-4.981,0.805c-1.541,0.782-3.311,1.384-4.548,2.774   c-1.247,1.34-2.67,2.512-3.544,4.219l-1.271,2.544l-0.584,1.281l-0.284,0.635l-0.14,0.328l-0.07,0.147l-0.033,0.077l-0.022,0.049   c0.126-0.186-0.196,0.296-0.174,0.268l-2.501,5.516c-0.821,1.779-2.704,3.787-4.241,5.554c-1.56,1.926-3.649,3.032-5.509,4.542   c-1.947,1.368-4.324,2.156-6.5,3.146c-4.631,1.323-9.469,1.56-13.54,0.471c-2.079-0.459-3.992-1.062-5.678-1.937   c-1.765-0.745-3.286-1.674-4.72-2.572c-2.85-1.887-5.109-3.885-6.894-5.844C278.973,41.573,277.622,39.702,276.619,38.115z    M476.518,351.03v113.6H0v-113.6h32.459V223.42l91.47-64.177v64.177l91.456-64.177v64.177l91.475-64.177v126.143h31.56   l17.14-223.139h52.313l15.002,223.139h35.196v65.653h18.446V351.03z M149.375,301.975H77.461v66.387h71.914V301.975z    M273.293,301.975h-71.916v66.387h71.916V301.975z M398.768,301.975h-71.914v66.387h71.914V301.975z" />
        </g>
      </svg>
    ),
  },
  {
    to: "/services",
    text: "Servicios",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path d="M458.671,214.24v-11.571c0-17.645-14.354-32-32-32H320v-53.337c0-5.891-4.775-10.667-10.667-10.667h-32.001V74.67     c0-5.891-4.776-10.667-10.667-10.667H121.759L103.545,45.79c-4.164-4.165-10.918-4.165-15.084,0l-60.878,60.875H10.667     C4.776,106.666,0,111.441,0,117.332v298.668c0,5.89,4.776,10.667,10.667,10.667h43.739c1.605,7.878,4.954,15.129,9.622,21.333     H42.666C36.775,448,32,452.777,32,458.667s4.775,10.667,10.667,10.667h63.997c0.027,0,0.052-0.004,0.079-0.004     c25.72-0.037,47.231-18.373,52.181-42.662h150.409h43.747c1.605,7.878,4.955,15.129,9.623,21.333H341.34     c-5.89,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667h63.997c0.027,0,0.053-0.004,0.08-0.004     c25.72-0.037,47.231-18.373,52.181-42.662h43.735c5.891,0,10.667-4.776,10.667-10.667v-96.001v-42.669     C512,245.679,488.896,219.336,458.671,214.24z M255.999,85.337v21.329h-91.576l-21.33-21.329H255.999z M96.003,68.417     l13.788,13.787c0.005,0.005,0.011,0.011,0.016,0.016l24.446,24.446H57.754L96.003,68.417z M106.666,447.998     c-17.646,0-32.001-14.354-32.001-31.998c0-17.646,14.355-32.002,32.001-32.002c17.644,0,31.998,14.356,31.998,32.002     C138.663,433.644,124.309,447.998,106.666,447.998z M298.666,181.336v181.332h-72.543c-5.891,0-10.667,4.776-10.667,10.667     s4.775,10.667,10.667,10.667h72.543v21.333H158.924c-4.955-24.316-26.503-42.668-52.258-42.668     c-25.755,0-47.306,18.353-52.261,42.668H21.333V234.668h42.665c5.89,0,10.667-4.775,10.667-10.667     c0-5.891-4.776-10.667-10.667-10.667H21.333v-21.332H149.33c5.891,0,10.667-4.775,10.667-10.667     c0-5.891-4.775-10.667-10.667-10.667H21.333v-42.671h10.66c0.006,0,0.012,0,0.017,0h266.656V181.336z M353.08,405.334H320     v-21.333h42.701C358.032,390.206,354.684,397.456,353.08,405.334z M437.337,416.035c-0.019,17.629-14.366,31.963-31.998,31.963     c-17.645,0-32.001-14.354-32.001-31.998c0-17.619,14.311-31.955,31.919-32h0.08c0.01,0,0.019-0.001,0.028-0.001     c17.621,0.014,31.953,14.346,31.972,31.967c0,0.012-0.001,0.022-0.001,0.034C437.336,416.012,437.337,416.023,437.337,416.035z      M490.667,405.334h-33.069c-4.956-24.316-26.504-42.668-52.259-42.668c-0.028,0-0.055,0.002-0.082,0.002h-85.258V192.003h106.672     c5.882,0,10.667,4.785,10.667,10.667v10.666h-74.666c-5.89,0-10.667,4.775-10.667,10.667v95.998     c0,5.891,4.776,10.667,10.667,10.667h127.995V405.334z M394.673,234.668v74.665h-21.334v-74.665H394.673z M490.667,309.333     h-74.661v-74.665h31.999c23.524,0,42.662,19.138,42.662,42.663V309.333z" />
              <path d="M184.397,384.001h6.658c5.89,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667h-6.658     c-5.891,0-10.667,4.776-10.667,10.667S178.507,384.001,184.397,384.001z" />
              <path d="M184.397,192.003h6.658c5.89,0,10.667-4.775,10.667-10.667c0-5.891-4.776-10.667-10.667-10.667h-6.658     c-5.891,0-10.667,4.775-10.667,10.667C173.731,187.227,178.507,192.003,184.397,192.003z" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    to: "/profile",
    text: "Mi perfil",
    svg: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 20 20"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85794 14.1421 2.50002 10 2.50002C5.85794 2.50002 2.50002 5.85794 2.50002 10C2.50002 14.1421 5.85794 17.5 10 17.5ZM10 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6025 1.66669 10 1.66669C5.39752 1.66669 1.66669 5.39752 1.66669 10C1.66669 14.6025 5.39752 18.3334 10 18.3334Z"
          fill="white"
        />
        <path
          d="M5 14.8459C5 14.4154 5.32167 14.0517 5.75 14.0042C8.96458 13.6484 11.05 13.6804 14.2575 14.0121C14.4177 14.0289 14.5695 14.092 14.6944 14.1937C14.8193 14.2954 14.9119 14.4312 14.9608 14.5847C15.0098 14.7381 15.013 14.9025 14.9701 15.0577C14.9272 15.2129 14.84 15.3523 14.7192 15.4588C10.9338 18.7584 8.77042 18.7129 5.26667 15.4621C5.09583 15.3038 5 15.0784 5 14.8459Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2146 14.4263C11.0325 14.0971 8.97713 14.0663 5.79546 14.4184C5.69073 14.4306 5.59418 14.481 5.52429 14.5599C5.45441 14.6389 5.4161 14.7408 5.41671 14.8463C5.41671 14.9654 5.46629 15.0784 5.55004 15.1567C7.28671 16.7675 8.60254 17.4954 9.88879 17.5C11.1796 17.5046 12.5663 16.7825 14.4455 15.145C14.5052 15.0919 14.5481 15.0226 14.5692 14.9455C14.5902 14.8684 14.5884 14.7868 14.5639 14.7107C14.5395 14.6346 14.4934 14.5673 14.4314 14.5168C14.3694 14.4664 14.2941 14.4347 14.2146 14.4263ZM5.70421 13.59C8.95254 13.2304 11.0684 13.2629 14.3009 13.5975C14.5418 13.6227 14.7702 13.7175 14.9581 13.8705C15.146 14.0235 15.2852 14.2279 15.3587 14.4587C15.4322 14.6896 15.4367 14.9369 15.3719 15.1703C15.307 15.4037 15.1755 15.6131 14.9934 15.7729C13.0871 17.4346 11.4996 18.3396 9.88629 18.3334C8.26838 18.3275 6.75088 17.4071 4.98379 15.7675C4.85727 15.6497 4.75641 15.507 4.68752 15.3484C4.61862 15.1899 4.58317 15.0188 4.58338 14.8459C4.58277 14.5352 4.69679 14.2353 4.90361 14.0034C5.11043 13.7716 5.3955 13.6247 5.70421 13.59Z"
          fill="white"
        />
        <path
          d="M13.3334 8.33333C13.3334 9.21739 12.9822 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11597 11.6667 8.26812 11.3155 7.643 10.6904C7.01788 10.0652 6.66669 9.21739 6.66669 8.33333C6.66669 7.44928 7.01788 6.60143 7.643 5.97631C8.26812 5.35119 9.11597 5 10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9822 6.60143 13.3334 7.44928 13.3334 8.33333Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 10.8333C10.6631 10.8333 11.2989 10.5699 11.7678 10.1011C12.2366 9.63226 12.5 8.99637 12.5 8.33333C12.5 7.67029 12.2366 7.03441 11.7678 6.56557C11.2989 6.09673 10.6631 5.83333 10 5.83333C9.33698 5.83333 8.70109 6.09673 8.23225 6.56557C7.76341 7.03441 7.50002 7.67029 7.50002 8.33333C7.50002 8.99637 7.76341 9.63226 8.23225 10.1011C8.70109 10.5699 9.33698 10.8333 10 10.8333ZM10 11.6667C10.8841 11.6667 11.7319 11.3155 12.357 10.6904C12.9822 10.0652 13.3334 9.21739 13.3334 8.33333C13.3334 7.44928 12.9822 6.60143 12.357 5.97631C11.7319 5.35119 10.8841 5 10 5C9.11597 5 8.26812 5.35119 7.643 5.97631C7.01788 6.60143 6.66669 7.44928 6.66669 8.33333C6.66669 9.21739 7.01788 10.0652 7.643 10.6904C8.26812 11.3155 9.11597 11.6667 10 11.6667Z"
          fill="black"
        />
      </svg>
    ),
  },
];
