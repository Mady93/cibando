import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [MessageService] //aggiunto
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private messageService:MessageService, private router:Router) { }
  loginError='';
  user: any;

  ngOnInit(): void {
  }

  onSubmit(credenziali:any){
if(credenziali.email !=='' && credenziali.password !==''){
  this.authService.login(credenziali.email,credenziali.password).subscribe({
    next:(res) =>{
      this.user= res;
      if(res){
       this.authService.saveStorage(res);
       this.messageService.add({severity:'success',summary:'successo', detail:'Login effettuato correttamente',life: 3000})
       this.router.navigate(['/home']);
      }else{
        this.loginError= "email o password errati"
        this.messageService.add({severity:'error',summary:'Errore', detail:'Email o password errati'})

      }
      },
      error:(err)=>{
        console.log(err);
        this.loginError = "errore nel server: " +err;
        this.messageService.add({severity:'error',summary:'Errore', detail:'Email o password errati'})

      }
  })
}
  }
}
