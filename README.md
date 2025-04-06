# neversitup-backend-test



<pre>
my-nest-app/
│
├── src/
│   ├── app.controller.ts         # Root controller
│   ├── app.controller.spec.ts    # Test for app controller
│   ├── app.module.ts             # Root module (main entry module)
│   ├── app.service.ts            # Root service
│   ├── main.ts                   # Entry point of the app
│   ├── share/                   # Shared modules
│   │   ├── guards/
│   │   └── interceptors/
│   ├── config/                   # Configuration related files (env, services)
│   │   ├── config.module.ts
│   │   └── configuration.ts
│   ├── modules/                  # Feature modules
│   │   ├── users/
│   │   │   ├── entities/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   └── users.module.ts
│   │   └── auth/                 # Auth feature module (JWT, Passport)
│   │       ├── auth.controller.ts
│   │       ├── auth.service.ts
│   │       └── auth.module.ts
│
├── test/                         # End-to-end test folder
│   └── app.e2e-spec.ts
├── .env                          # Environment variables
├── .gitignore
├── nest-cli.json                 # Nest CLI config
├── package.json
├── tsconfig.json
└── README.md
</pre>
