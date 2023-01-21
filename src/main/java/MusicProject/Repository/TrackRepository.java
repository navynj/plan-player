package MusicProject.Repository;

import MusicProject.Domain.Main;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackRepository extends JpaRepository<Main, Long> {

}
