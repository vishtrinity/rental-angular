import { TestBed, fakeAsync, ComponentFixture, tick} from '@angular/core/testing';
import { AppComponent, APIService } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let rentalServiceStub: any;
  let apiService: APIService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let booknowBtn: HTMLButtonElement;
  let name: HTMLInputElement;
  let email: HTMLInputElement;
  let mobile: HTMLInputElement;

  beforeEach(async () => {

    rentalServiceStub = {

    }

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ { provide: APIService, useValue: rentalServiceStub } ],
      imports: [FormsModule]
    });

    apiService = TestBed.inject(APIService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;


  });

  it('should display Online Car Rental Service', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1#title').textContent).toContain("Online Car Rental Service");
  });

  it('should have Mruti Swft 2050', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.car-title').textContent).toContain("Mruti Swft 2050");
  });

  it('should book rental service', () => {

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.car-title').textContent).toContain("Mruti Swft 2050");

    fixture.nativeElement.querySelector('.car-title').click()
    fixture.detectChanges();

    fixture.nativeElement.querySelector('#month_12').click()
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.amount-payable').textContent).toContain("Payable Amount : ₹ 60000");

    let name_input = fixture.nativeElement.querySelector('input#name');
    name_input.value = 'Ram';
    name_input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let email_input = fixture.nativeElement.querySelector('input#email');
    email_input.value = 'ram@gmail.com';
    email_input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let mobile_input = fixture.nativeElement.querySelector('input#mobile');
    mobile_input.value = '+91-1234567891';
    mobile_input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    fixture.nativeElement.querySelector('#submit-btn').click()

  });

});
