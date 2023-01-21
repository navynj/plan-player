package MusicProject.Controller;

import MusicProject.Domain.Main;
import MusicProject.Repository.TrackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MainController {

    private final TrackRepository trackRepository;

    @GetMapping("/")
    public String main() {
        return "main";
    }

    @GetMapping("/track")
    public String track(Model model) {
        List<Main> trackList = trackRepository.findAll();
        model.addAttribute("trackList", trackList);
        return "track";
    }

    @PostMapping("/addTrack")
    public String addTrack(@RequestParam("track") String track) {
        Main trackDB = new Main();
        trackDB.setTrackMemo(track);
        trackRepository.save(trackDB);
        return "redirect:/track";
    }
}
