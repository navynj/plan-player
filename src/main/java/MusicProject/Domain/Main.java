package MusicProject.Domain;

import jakarta.persistence.*;
import lombok.*;
import org.jetbrains.annotations.NotNull;

@Entity(name="Main")
@Table(name="Track")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Main {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String TrackMemo;
}

