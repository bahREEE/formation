package tn.webdev.formation.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Formation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long formationId;

    private String titre;

    private String type;

    private String annee;

    private Integer nbsession;

    @ManyToOne
    @JoinColumn(name="domaineId")
    private Domaine domaine;

    private Double budget;
}
