import { Component, OnInit } from '@angular/core';
import { EclAppLanguageChangeEvent, EclLanguage, EclLanguageService } from '@eui/ecl-core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public readonly DEFAULT_LANGUAGE_CODE = 'en';
    public languages: Array<EclLanguage> = [];
    public currentLanguage: EclLanguage;

    constructor(
        private eclLanguageService: EclLanguageService,
        private ngxTranslateService: TranslateService,
    ) { }

    ngOnInit() {
        /**
         * Implement your own strategy for storing/retrieving language
         * Please check eui tools for this purpose documented here
         * https://webgate.ec.europa.eu/fpfis/wikis/display/eUI
         */
        this.languages = this.eclLanguageService.getEULanguages();
        this.currentLanguage = this.eclLanguageService.getLanguageByCode(this.DEFAULT_LANGUAGE_CODE);

        this.ngxTranslateService.use(this.currentLanguage.code);
    }

    onLanguageChanged(evt: EclAppLanguageChangeEvent) {
        this.currentLanguage = evt.language;

        this.ngxTranslateService.use(evt.language.code);
    }
}
