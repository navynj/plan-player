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

    public String createEmailConfirmationToken(String userId, String receiverEmail) {
        Assert.hasText(userId, "userId는 필수입니다.");
        Assert.hasText(receiverEmail, "receiverEmail은 필수입니다.");

        ConfirmationToken confirmationToken = ConfirmationToken.createEmailConfirmationToken(userId);
        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(receiverEmail);
        mailMessage.setSubject("회원가입 이메일 인증");
        mailMessage.setText("http://localhost:8080/viewConfirnEmail?token="+confirmationToken.getId());
        emailService.sendEmail(mailMessage);

        return confirmationToken.getId();
    }

    // 예외처리 다시 공부하기
    public ConfirmationToken findByIdAndExpirationDateAfterAndExpired(String confirmationTokenId) {

        Optional<ConfirmationToken> confirmationToken = confirmationTokenRepository
                .findByIdAndExpirationDateAfterAndExpired(confirmationTokenId, LocalDateTime.now(), false);

        return confirmationToken.orElseThrow(() -> new BadRequestException("bad request"));
    };
}
