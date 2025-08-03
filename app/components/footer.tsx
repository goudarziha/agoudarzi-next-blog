function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM6 9.5C4.61929 9.5 3.5 8.38071 3.5 7C3.5 5.61929 4.61929 4.5 6 4.5C7.38071 4.5 8.5 5.61929 8.5 7C8.5 8.38071 7.38071 9.5 6 9.5ZM10.0303 3.46967C9.73744 3.17678 9.26256 3.17678 8.96967 3.46967C8.67678 3.76256 8.67678 4.23744 8.96967 4.53033L8.96967 4.53033C9.26256 4.82322 9.73744 4.82322 10.0303 4.53033L10.0303 4.53033C10.3232 4.23744 10.3232 3.76256 10.0303 3.46967Z" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/goudarziha/"
          >
            <InstagramIcon />
            <p className="ml-2 h-7">Instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goudarziha"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Amir Goudarzi
      </p>
    </footer>
  )
}
