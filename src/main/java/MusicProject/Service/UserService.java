package MusicProject.Service;


import MusicProject.Domain.ConfirmationToken;
import MusicProject.Domain.Account;
import MusicProject.Repository.AccountRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Slf4j
@Transactional
public class UserService {

    private final AccountRepository accountRepository;
    private final TokenService tokenService;

    public void confirmEmail(String token) {
        ConfirmationToken findToken = tokenService.findByIdAndExpirationDateAfterAndExpired(token);
        Optional<Account> findUser = accountRepository.findById(findToken.getUserId());
        if(findUser.isPresent()) {
            findToken.useToken();
        }
    }
}
