const imperialTable = ["03:00:00", "06:00:00", "09:00:00", "12:00:00", "15:00:00", "18:00:00", "21:00:00", "24:00:00"];
const bossTable = {
		0:	{//Su
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				},
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"15:00:00": [
				{
					"type": "world-boss",
					"name": "เบลล์",
					"img": "imgs/vell.png"
				}
			],
			"16:00:00": [
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"17:00:00": [
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				},
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-node",
					"name": "สงครามฐาน",
					"img": "imgs/warnode.png"
				}
			],
			"22:15:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"22:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"23:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		},
		1:	{//Mo
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"15:00:00": [
			],
			"16:00:00": [
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"17:00:00": [
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				},
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-node",
					"name": "สงครามฐาน",
					"img": "imgs/warnode.png"
				}
			],
			"22:15:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"22:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"23:00:00": [
				{
					"type": "world-boss",
					"name": "ผู้ทำลายแห่งมีลม็อก โอฟิน",
					"img": "imgs/offin.png"
				}
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		},
		2:	{//Tu
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"15:00:00": [
			],
			"16:00:00": [
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"17:00:00": [
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "มูลัคคา",
					"img": "imgs/muraka.png"
				},
				{
					"type": "world-boss",
					"name": "กวินท์",
					"img": "imgs/quint.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-node",
					"name": "สงครามฐาน",
					"img": "imgs/warnode.png"
				}
			],
			"22:15:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"22:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"23:00:00": [
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		},
		3:	{//We
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				},
				{
					"type": "world-boss",
					"name": "ผู้ทำลายแห่งมีลม็อก โอฟิน",
					"img": "imgs/offin.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				},
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"15:00:00": [
			],
			"16:00:00": [
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"17:00:00": [
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-node",
					"name": "สงครามฐาน",
					"img": "imgs/warnode.png"
				}
			],
			"22:15:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"22:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"23:00:00": [
				{
					"type": "world-boss",
					"name": "เบลล์",
					"img": "imgs/vell.png"
				}
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		},
		4:	{//Th
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				},
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"15:00:00": [
			],
			"16:00:00": [
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"17:00:00": [
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				},
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-node",
					"name": "สงครามฐาน",
					"img": "imgs/warnode.png"
				}
			],
			"22:15:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"22:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"23:00:00": [
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		},
		5:	{//Fr
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				},
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"15:00:00": [
			],
			"16:00:00": [
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"17:00:00": [
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-node",
					"name": "สงครามฐาน",
					"img": "imgs/warnode.png"
				}
			],
			"22:15:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"22:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"23:00:00": [
				{
					"type": "world-boss",
					"name": "ผู้ทำลายแห่งมีลม็อก โอฟิน",
					"img": "imgs/offin.png"
				}
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		},
		6:	{//Sa
			"00:00:00": [
			],
			"00:30:00": [
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				}
			],
			"06:00:00": [
			],
			"10:00:00": [
				{
					"type": "world-boss",
					"name": "คูทุม",
					"img": "imgs/kutum.png"
				},
				{
					"type": "world-boss",
					"name": "เทพแห่งการทุจริต คจาคาร์",
					"img": "imgs/kzarka.png"
				}
			],
			"11:00:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"12:00:00": [
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"13:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"14:00:00": [
				{
					"type": "world-boss",
					"name": "คารานด้า",
					"img": "imgs/karanda.png"
				},
				{
					"type": "world-boss",
					"name": "นูเวอร์",
					"img": "imgs/nouver.png"
				}
			],
			"14:30:00": [
				{
					"type": "event-boss",
					"name": "อิลซาเบลล่า",
					"img": "imgs/Isabella.png"
				}
			],
			"15:00:00": [
			],
			"16:00:00": [
				{
					"type": "field-boss",
					"name": "เงาดำ",
					"img": "imgs/shadow.png"
				}
			],
			"16:30:00": [
				{
					"type": "event-boss",
					"name": "จิตใจเด็กน้อย No.12",
					"img": "imgs/no12.png"
				}
			],
			"17:00:00": [
				{
					"type": "world-boss",
					"name": "กามอส",
					"img": "imgs/garmoth.png"
				}
			],
			"19:00:00": [
				{
					"type": "world-boss",
					"name": "มูลัคคา",
					"img": "imgs/muraka.png"
				},
				{
					"type": "world-boss",
					"name": "กวินท์",
					"img": "imgs/quint.png"
				}
			],
			"20:00:00": [
				{
					"type": "war-castle",
					"name": "สงครามปราสาท",
					"img": "imgs/warcastle.png"
				}
			],
			"22:15:00": [
			],
			"23:00:00": [
			],
			"23:30:00": [
			],
			"23:45:00": [
			]
		}
			
	}
