
// 1 - Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// 2 - Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// 3
// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

// 1 - done
enum TypesOfMedia {
  Video = "video",
  Audio = "audio"
}
// 2 - done
enum FormatOfMedia {
  Mp4 = ".mp4",
  Mov = ".mov",
  Mkv = ".mkv",
  Flv = ".flv",
  WebM = "webM"
}

// 3 - done
interface IPlayMedia {
  name: string,
  type: TypesOfMedia,
  format: FormatOfMedia,
  subtitles?: string
  marks?: unknown 
}

// 4
//  Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!

function playMedia(
  {name, type, format, subtitles, marks}: IPlayMedia = {
    name: "DefaultName",
    format: FormatOfMedia.Mp4,
    type: TypesOfMedia.Audio
  }
): string {
  let marksLog: string;

// 4 - done
  if(Array.isArray(marks)){
    marksLog = marks.join(" ")
  }
  else if(typeof marks === "string") {
    marksLog = marks
  }
  else {
    marksLog = "Unsupported type of marks"
  }
  
  console.log(`Media ${name} ${format} is ${type}
  Marks: ${marksLog}
  Subtitles: ${subtitles ?? "none"}
  `)
  return "Media started"
}

playMedia({
  name:"Panda",
  type: TypesOfMedia.Audio,
  format: FormatOfMedia.Mp4,
  subtitles: "hmhmhm hmhmhm doh",
	marks: ["4:30", "5:40"]
})