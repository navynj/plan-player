package MusicProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@Service
public class EmailServiceImpl implements EmailService{

    @Autowired
    JavaMailSender emailSender;

    public static final String ePw = createKey();

    private MimeMessage createMessage(String to) throws Exception {
        System.out.println("보내는 대상 : "+to);
        System.out.println("인증 번호 : "+ePw);
        MimeMessage message = emailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, to);
        message.setSubject("이메일 인증 테스트");

        String msgg = "";
        msgg += "<div style='margine:20px;'>";
        msgg += "<p>아래 코드를 복사해서 입력해주세요</p>";
        msgg += "CODE : <strong>";
        msgg += ePw+"<strong><div><br/>";
        msgg +="</div>";
        message.setText(msgg, "utf-8","html");
        message.setFrom(new InternetAddress("digh2165@naver.com", "nayeonjeong"));

        return message;
    }

    public static String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for(int i = 0; i < 8; i++) {
            int index = rnd.nextInt(3);

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    break;
            }
        }
        return key.toString();
    }

    @Override
    public String sendSimpleMessage(String to) throws Exception {
        MimeMessage message = createMessage(to);

        try {
            emailSender.send(message);
        } catch(MailException es) {
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return ePw;
    }
}
