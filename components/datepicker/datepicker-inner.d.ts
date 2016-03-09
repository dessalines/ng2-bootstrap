import { OnInit } from 'angular2/core';
export declare class DatePickerInner implements OnInit {
    datepickerMode: string;
    startingDay: number;
    yearRange: number;
    stepDay: any;
    stepMonth: any;
    stepYear: any;
    private modes;
    private dateFormatter;
    private uniqueId;
    private _activeDate;
    private selectedDate;
    private _initDate;
    private activeDateId;
    private minDate;
    private maxDate;
    private minMode;
    private maxMode;
    private showWeeks;
    private formatDay;
    private formatMonth;
    private formatYear;
    private formatDayHeader;
    private formatDayTitle;
    private formatMonthTitle;
    private onlyCurrentMonth;
    private shortcutPropagation;
    private customClass;
    private dateDisabled;
    private templateUrl;
    private refreshViewHandlerDay;
    private compareHandlerDay;
    private refreshViewHandlerMonth;
    private compareHandlerMonth;
    private refreshViewHandlerYear;
    private compareHandlerYear;
    private update;
    private initDate;
    private activeDate;
    ngOnInit(): void;
    setCompareHandler(handler: Function, type: string): void;
    compare(date1: Date, date2: Date): number;
    setRefreshViewHandler(handler: Function, type: string): void;
    refreshView(): void;
    dateFilter(date: Date, format: string): string;
    private isActive(dateObject);
    private createDateObject(date, format);
    private isDisabled(date);
    private split(arr, size);
    fixTimeZone(date: Date): void;
    select(date: Date): void;
    move(direction: number): void;
    toggleMode(direction: number): void;
}
