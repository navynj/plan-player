package MusicProject.Service;

import MusicProject.Domain.ConfirmationToken;
import MusicProject.Exception.BadRequestException;
import MusicProject.Repository.ConfirmationTokenRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Slf4j
public class TokenService {

    private final ConfirmationTokenRepository confirmationTokenRepository;
    private final EmailService emailService;

    // 예외처리 다시 공부하기
    public ConfirmationToken findByIdAndExpirationDateAfterAndExpired(String confirmationTokenId) {

        Optional<ConfirmationToken> confirmationToken = confirmationTokenRepository
                .findByIdAndExpirationDateAfterAndExpired(confirmationTokenId, LocalDateTime.now(), false);

        return confirmationToken.orElseThrow(() -> new BadRequestException("bad request"));
    };
}
