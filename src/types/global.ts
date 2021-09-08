export interface Env {
    NODE_ENV: 'development' | 'production';
    REACT_APP_ENVIRONMENT: 'development' | 'production';

    REACT_APP_SENTRY_DSN: string;
}