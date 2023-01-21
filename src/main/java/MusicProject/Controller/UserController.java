package MusicProject.Controller;


import MusicProject.Domain.Account;
import MusicProject.Repository.AccountRepository;
import MusicProject.Service.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Service
@Controller
@RequestMapping
public class UserController {

    private final UserService userService;
    private final TokenService tokenService;
    private final SecurityService securityService;
    private final EmailService emailService;

    @Autowired
    private final AccountRepository accountRepository;

    @GetMapping("/assignment")
    public String assignment() {
        return "assignment";
    }

    @PostMapping("/emailConfirm")
    public String emailConfirm(@RequestParam("userId") String email, Account account) throws Exception {
        String confirm = emailService.sendSimpleMessage(email);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        account.setUserPw(passwordEncoder.encode(account.getUserPw()));
        accountRepository.save(account);
        return "redirect:/";
    }


    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication != null) {
            new SecurityContextLogoutHandler().logout(request, response, authentication);
        }

        return "redirect:/";
    }

    @PostMapping("/joinProc")
    public String joinProc(Account member) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        member.setUserPw(passwordEncoder.encode(member.getUserPw()));
        accountRepository.save(member);

        return "redirect:/";
    }
}
