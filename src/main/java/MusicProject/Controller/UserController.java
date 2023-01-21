package MusicProject.Controller;


import MusicProject.Domain.Account;
import MusicProject.Repository.AccountRepository;
import MusicProject.Service.SecurityService;
import MusicProject.Service.TokenService;
import MusicProject.Service.UserService;
import MusicProject.Service.accountDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    @Autowired
    private final AccountRepository accountRepository;

    @GetMapping("/assignment")
    public String assignment() {
        return "assignment";
    }

    @GetMapping("/viewConfirmEmail")
    public String viewConfirmEmail(@Validated @RequestParam String token) {

        userService.confirmEmail(token);

        return "redirect:/";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/joinProc")
    public String joinProc(Account member) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        member.setUserPw(passwordEncoder.encode(member.getUserPw()));
        accountRepository.save(member);

        return "redirect:/";
    }
}
