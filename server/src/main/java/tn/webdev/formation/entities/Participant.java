package tn.webdev.formation.entities;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Participant {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;


    @ManyToOne
    @JoinColumn(name="paysId")
    private Pays pays;

    @OneToOne
    @JoinColumn(name = "idProfil", referencedColumnName = "id")
    private Profil profil;

    @ManyToMany
    @JoinTable(
        name = "Participant_Session", 
        joinColumns = @JoinColumn(name = "sessionId"), 
        inverseJoinColumns = @JoinColumn(name = "participantId"))
    private List<SessionFormation> sessions;

    @Email
    private String email;

    private Integer tel;

    private String nom;
    private String prenom;


}
