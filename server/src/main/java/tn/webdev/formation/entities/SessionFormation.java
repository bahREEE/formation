package tn.webdev.formation.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SessionFormation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name="orgId")
    private Organisme organisme;

    private String lieu;

    @ManyToOne
    @JoinColumn(name = "formateurId")
    private Formateur formateur;

    @ManyToOne
    @JoinColumn(name = "formationId")
    private Formation formation;

    @ManyToMany(mappedBy = "sessions")
    @JsonIgnore
    private List<Participant> participants;

    private String dateDebut;

    private String dateFin;

    private Integer nbParticipants;
}
