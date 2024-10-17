# Next.js 14 Boilerplate

A robust and feature-rich boilerplate for Next.js 14 projects, designed to jumpstart your development with best practices and essential tooling.

## 🚀 Features

- **Next.js 14**: Leverage the latest features of Next.js for optimal performance and developer experience
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **ESLint & Prettier**: Ensure code quality and consistency
- **Husky & lint-staged**: Automate code quality checks before commits
- **React Query**: Powerful data synchronization for React applications
- **Axios**: Promise-based HTTP client for the browser and Node.js
- **Yup**: Object schema validation
- **React Icons**: Popular icon packs as React components
- **Commitlint**: Lint commit messages
- **Custom hooks**: Including useDebounce for performance optimization
- **Environment configuration**: Easy management of environment variables
- **Responsive design**: Mobile-first approach with react-responsive

## 📦 Getting Started

### Prerequisites

- Node.js 20.18.0 or later
- Yarn 1.22.22 or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tcdtist/public-nextjs14-boilerplate.git
   cd public-nextjs14-boilerplate
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Project Structure

```
├── .github/
├── .husky/
├── .vscode/
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── configs/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── libs/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── validations/
│   └── views/
├── .env.examples
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .lintstagedrc.js
├── .nvmrc
├── .prettierignore
├── commitlint.config.js
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── yarn.lock
```

## 🧰 Available Scripts

- `yarn dev`: Run the development server
- `yarn build`: Build the application for production
- `yarn start`: Start the production server
- `yarn lint`: Run ESLint
- `yarn prettier`: Check and format code with Prettier
- `yarn commitlint`: Lint commit messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

---

Built with ❤️ by [tcdtist](https://github.com/tcdtist)
