import { Injectable } from '@angular/core';
import { HotNumbersService } from '../../hot-numbers/services/hot-numbers.service';

@Injectable({
  providedIn: 'root'
})
export class LottoBibleService extends HotNumbersService {}

// This service extends HotNumbersService to provide specific functionality for LottoBible
// It can be customized further if needed, but currently inherits all methods and properties from HotNumbersService
// This allows it to utilize the existing logic for handling hot numbers, which can be tailored  
// to the specific requirements of the LottoBible feature without duplicating code.
