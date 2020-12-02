// 'use strict'

// сценарій об’єкта
let superTeam = {
    title: "",
    leader: "",
    members: [],
    memberCount: 0,
    agenda: "",
    isEvil: true
};
let play = "";
//сценарій введення
superTeam.title = prompt("Name: ");
superTeam.leader = prompt("Leader: ");
let leaders = prompt("Members: ");
superTeam.members = leaders.split(','); //split - розбиває рядок на масив
superTeam.memberCount = superTeam.members.length; //підраховує число введених рядків
superTeam.agenda = prompt("Agenda: ");
superTeam.isEvil = prompt("is Evil?: ");

play = "Here`s the team:\n" + "name - " + superTeam.title + "\n" +
    "leader - " + superTeam.leader + "\n" + "members - " + superTeam.members + "\n" +
    "memberCount - " + superTeam.memberCount + "\n" + "agenda - " + superTeam.agenda + "\n" +
    "isEvil - " + Boolean(superTeam.isEvil);
    
alert(play);