export class LogoApiService {
    getLogo(url) {
        return `https://logo.clearbit.com/${new URL(url).hostname}`;
    }
}