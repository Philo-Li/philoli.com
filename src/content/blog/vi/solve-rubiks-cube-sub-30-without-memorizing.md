---
layout: blog
title: "Làm thế nào để giải Rubik dưới 30 giây mà không cần học công thức: Ai cũng có thể hiểu"
date: 2026-10-09 12:00:00
tags:
  - Rubik
  - hướng dẫn
  - phương pháp Roux
  - giải nhanh
  - luyện tập có chủ đích
categories: Mày mò
description: "Tôi mất 89 ngày để từ lần giải đầu tiên đến đạt Ao100 dưới 30 giây, mà không học bất kỳ công thức CFOP nào. Bài viết này sẽ phân tích bốn giai đoạn dựa trên 4441 lần giải có ghi thời gian: bạn sẽ mắc kẹt ở đâu, cần luyện gì ở mỗi giai đoạn, và tại sao phương pháp Roux không yêu cầu bạn phải học thuộc công thức."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Làm thế nào để giải Rubik dưới 30 giây mà không cần học công thức: Ai cũng có thể hiểu" />
</figure>

Trong bài viết trước [《Làm thế nào để giải Rubik mà không cần học công thức》](/vi/blog/solve-rubiks-cube-without-formulas/), bạn đã học cách giải Rubik bằng logic hoán vị mà không cần ghi nhớ bất kỳ công thức nào. Bài viết đó đã nhận được rất nhiều phản hồi tích cực từ độc giả.

Nếu bạn đã thực hành theo, bây giờ bạn có thể mất khoảng hai đến ba phút để giải, dù còn khá lúng túng. Sau đó, một câu hỏi mới sẽ nảy sinh: Làm thế nào để giải nhanh hơn?

Nếu bạn tìm kiếm "giải Rubik nhanh", tất cả các hướng dẫn sẽ nói với bạn cùng một điều: muốn xuống dưới 30 giây, bạn phải học thuộc tất cả các công thức của CFOP. F2L có 41 công thức, OLL 57, PLL 21, tổng cộng là 119 công thức. Ngay cả khi bạn làm F2L bằng trực giác, bạn vẫn không thể tránh khỏi 78 công thức cho tầng trên cùng. Không học thuộc được thì đừng nghĩ đến chuyện giải nhanh.

Bài viết này muốn nói với bạn rằng, bạn hoàn toàn có thể giải Rubik dưới 30 giây mà không cần học thuộc bất kỳ công thức nào.

<!--more-->

Tôi bắt đầu giải Rubik lần đầu tiên vào ngày 7 tháng 5 năm 2026, và đến ngày 4 tháng 8, tôi đã đạt được Ao100 dưới 30 giây, tổng cộng mất 89 ngày. Trong suốt thời gian này, tôi không hề học thuộc bất kỳ công thức CFOP nào, chỉ đơn giản là chơi trong thời gian rảnh rỗi. Đây là dữ liệu thời gian của 4441 lần giải mà tôi đã ghi lại.

![Đường cong thành tích của 4441 lần giải](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Hình: Đường cong thành tích của 4441 lần giải. Đường màu xám là thời gian của mỗi lần giải, đường đậm là xu hướng Ao100, và các điểm đỏ là những lần phá kỷ lục cá nhân. Ao100 tốt nhất của tôi là 28.22 giây.*

Với việc luyện tập chủ động, có ý thức và duy trì tần suất, bất kỳ ai cũng có thể đạt được sub-30 từ con số 0 chỉ trong vài tháng.

Dưới 30 giây nghĩa là thế nào? Tại [Giải vô địch Rubik thế giới lần thứ nhất năm 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), thành tích của nhà vô địch là 22.95 giây, đây cũng là kỷ lục thế giới chính thức đầu tiên được WCA công nhận sau này; người đứng thứ 10 là 29.11 giây, chính là Jessica Fridrich, người đã phát minh ra CFOP mà chúng ta sẽ nói đến ở phần tiếp theo. Nói cách khác, một người chơi nghiệp dư đạt sub-30 sau vài tháng luyện tập ngày nay, nếu đặt vào năm 1982, có thể lọt vào top 10 thế giới.

Tiếp theo, tôi sẽ chia sẻ với bạn từng bước tôi đã thực hiện như thế nào, và toàn bộ phương pháp luyện tập này sẽ được chia sẻ đầy đủ cho bạn.

## Tại sao giới speedcubing lại học thuộc công thức

Trước hết, hãy làm rõ một điều: tại sao "nhanh" và "học thuộc công thức" lại gắn liền với nhau trong tâm trí mọi người?

Vào đầu những năm 1980, giáo sư gốc Séc Jessica Fridrich (sau này nghiên cứu pháp y kỹ thuật số tại Đại học Binghamton, Hoa Kỳ) đã tổng hợp một bộ phương pháp giải theo từng tầng, sau này được gọi là CFOP (Cross, F2L, OLL, PLL). Ý tưởng của phương pháp này là: liệt kê tất cả các trường hợp có thể xảy ra ở tầng trên cùng, và gán cho mỗi trường hợp một công thức tối ưu. Bạn nhận diện trường hợp, thực hiện công thức, mà không cần suy nghĩ.

![Jessica Fridrich và khối Rubik trong văn phòng của bà](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Hình: Jessica Fridrich và khối Rubik trong văn phòng của bà. Năm 1982, bà đạt 29.11 giây và xếp thứ 10 tại Giải vô địch thế giới đầu tiên, CFOP được đặt theo tên bà (Phương pháp Fridrich).*

Phương pháp này cực kỳ nhanh. Hầu hết các kỷ lục thế giới đều được thiết lập bằng CFOP. Vì vậy, tất cả các hướng dẫn đều dạy nó, tất cả các video đều nói về nó, "học giải nhanh" đồng nghĩa với "học CFOP", và học CFOP đồng nghĩa với việc học thuộc 119 công thức.

Nhưng hãy lưu ý, "học thuộc công thức" là đặc điểm của phương pháp CFOP, chứ không phải đặc điểm của "tốc độ" nói chung. CFOP yêu cầu học thuộc vì nó chọn con đường liệt kê tất cả các trường hợp. Liệt kê thì cần ghi nhớ, đây là cái giá phải trả.

Có phương pháp nào không đi theo con đường liệt kê này không? Có chứ.

## Phương pháp giải không cần học công thức: Phương pháp Roux

Năm 2003, Gilles Roux, một người Pháp, đã công bố một cách tiếp cận hoàn toàn khác. Thay vì xếp từng tầng, phương pháp này bắt đầu bằng việc xây dựng hai "khối" 1×2×3 ở bên trái và bên phải, sau đó xử lý bốn góc tầng trên cùng, và cuối cùng chỉ còn sáu cạnh, được hoàn thành bằng cách sử dụng hai loại xoay là tầng giữa M và tầng trên U.

![Gilles Roux trong một cuộc thi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Hình: Gilles Roux trong một cuộc thi. Cắt từ video thi đấu những năm đầu, hình ảnh đã được phục hồi và phóng to bằng AI.*

Trong bài viết trước, chúng ta đã giải Rubik một lần bằng khung này. Bây giờ, hãy xem lại bốn bước của nó, lần này tập trung vào "những gì cần ghi nhớ ở mỗi bước":

| Bước | Nội dung | Công thức cần học thuộc |
| --- | --- | --- |
| 1. Khối đầu tiên | Xây dựng một khối 1×2×3 | 0 công thức, thuần quan sát |
| 2. Khối thứ hai | Xây dựng khối đối xứng còn lại | 0 công thức, thuần quan sát |
| 3. CMLL | Định hướng và hoán vị bốn góc tầng trên cùng | 9 công thức, tất cả đều có thể suy ra từ phép hoán vị 3 khối |
| 4. LSE | Sáu cạnh cuối cùng | 0 công thức, chỉ dùng xoay tầng trên (U) và tầng giữa (M) |

Trong bốn bước, có ba bước không yêu cầu bất kỳ công thức nào. Với CMLL, phần duy nhất cần một chút công thức, tổng cộng có 42 trường hợp, nhưng bạn không cần học cả 42 công thức. Phép hoán vị ba góc R U' L' U R' U' L U mà chúng ta đã nói đến ở bài trước, cùng với phép đối xứng và một vài biến thể của nó, có thể giải quyết tất cả các trường hợp, chỉ là chậm hơn một chút.

![Bốn bước của Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Hình: Bốn bước của phương pháp Roux, mỗi bước chỉ hiển thị các khối đã được đặt đúng vị trí cho đến bước đó: Khối đầu tiên → Khối thứ hai → CMLL (bốn góc tầng trên) → LSE (sáu cạnh cuối cùng). Cắt từ bảng "Giải pháp" trên trang Rubik 3D của tôi.*

Đây là lý do tại sao Roux có thể giải mà không cần học thuộc công thức: nó nén phần cần ghi nhớ vào một góc rất nhỏ, phần còn lại hoàn toàn dựa vào quan sát, hiểu biết và sự thành thạo.

## Từ 165 giây xuống 28 giây: Bốn giai đoạn

Dưới đây là con đường thực tế mà tôi đã đi qua. Mỗi giai đoạn đều được tôi đánh dấu thời gian bắt đầu và kết thúc bằng dữ liệu, sau đó giải thích tôi đã gặp khó khăn ở đâu và luyện tập gì trong giai đoạn đó. Điểm nghẽn của bạn có thể khác tôi, nhưng trình tự thì rất có thể sẽ giống nhau.

![Khoảng thời gian của bốn giai đoạn](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Hình: Khoảng thời gian của bốn giai đoạn. Giai đoạn một 3 tuần, giai đoạn hai 11 ngày, giai đoạn ba hai tháng, giai đoạn bốn cho đến nay.*

### Giai đoạn một: 165 giây → 60 giây (Tuần 1–3)

**Dữ liệu**: Từ 7 tháng 5 đến 27 tháng 5. Tuần đầu tiên trung bình 165 giây, tuần thứ ba 68 giây.

**Bạn gặp khó khăn ở đâu**: Khối đầu tiên còn rất lúng túng, phải tìm kiếm từng cặp góc-cạnh rất lâu. Sau khi tìm thấy một cặp, người mới chơi thường có xu hướng dừng lại để tiếp tục quan sát.

![Thời gian người mới chơi dành vào đâu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Hình: Thời gian người mới chơi dành vào đâu. Tay ngừng lại, mắt đảo qua lại trên khối Rubik để tìm kiếm, thời gian "tìm" gấp nhiều lần thời gian "xoay".*

**Cần luyện gì**:

Ở giai đoạn này, kẻ thù lớn nhất không phải là tay chậm, mà là mắt chậm. Thời gian bạn dành để "tìm" nhiều hơn rất nhiều so với thời gian "xoay". Vì vậy:

- Giữ nguyên vị trí quan sát, không xoay cả khối Rubik. Như đã nói ở bài trước, góc nhìn của Roux là cố định. Giai đoạn này cần biến việc "không xoay cả khối Rubik" thành phản xạ cơ bắp. Mỗi khi muốn xoay khối Rubik, hãy dừng lại và tự hỏi: Từ góc nhìn này, mình có thể thấy khối cần tìm không?
- Slow solving (xoay chậm). Không bấm giờ, nhưng các động tác phải liên tục, không được có bất kỳ sự ngắt quãng nào. Mỗi động tác có thể rất chậm, nhưng không được dừng lại. Điều cốt yếu là khi tay đang thực hiện động tác trước, mắt phải tập trung vào động tác tiếp theo, đây là trọng tâm của slow solving. Nghe có vẻ như bạn đang làm chậm lại, nhưng thực tế là bạn đang rèn luyện mắt để nhìn thấy mối quan hệ giữa vị trí của khối hiện tại và vị trí mà nó phải đến.
- Chỉ luyện Khối đầu tiên. Xáo trộn, xây khối đầu tiên, lại xáo trộn, lại xây khối đầu tiên. Không làm tiếp các bước sau. Khối đầu tiên là bước tự do nhất trong Roux, và cũng là bước hiệu quả nhất để rèn luyện khả năng quan sát.

Đừng học bất kỳ công thức mới nào trong giai đoạn này. Nút thắt cổ chai của bạn hiện tại không phải là công thức.

### Giai đoạn hai: 60 giây → 40 giây (Tuần 4–5)

**Dữ liệu**: Từ 27 tháng 5 đến 7 tháng 6, 11 ngày. Đây là giai đoạn giảm thời gian nhanh nhất trong toàn bộ quá trình, và cũng là giai đoạn tôi luyện tập nhiều nhất, với 723 lần trong tuần đầu tiên của tháng 6.

**Bạn gặp khó khăn ở đâu**: Các động tác không liên tục. Khối Rubik bị kẹt.

**Cần luyện gì**:

Trong giai đoạn này, bạn cần tối ưu hóa các động tác ở từng bước, tăng cường sự thành thạo của mỗi động tác dựa trên sự hiểu biết.

- Khối thứ hai (SB). Khối thứ hai khó hơn Khối đầu tiên vì không gian còn lại ít hơn một nửa, và bạn không thể làm hỏng Khối đầu tiên đã hoàn thành. Các động tác xoay quan trọng là R, r (hai lớp bên phải), M, U. Giai đoạn này bạn cần học cách sử dụng r và M thay cho R để di chuyển các khối, nhờ đó Khối đầu tiên sẽ không bao giờ bị phá hủy. Tối ưu hóa các bước động tác chính là tiết kiệm thời gian. Ví dụ, thay vì xoay ba lần theo chiều kim đồng hồ, bạn có thể xoay một lần ngược chiều kim đồng hồ.
- Thành thạo sử dụng tầng M. Bước cuối cùng của Roux hoàn toàn dựa vào M và U, việc xoay tầng M có mượt mà hay không trực tiếp quyết định giới hạn dưới của bạn. Dùng ngón áp út hoặc ngón giữa để đẩy M, bắt đầu luyện tập các nhịp điệu như M' U M' U.
- Nhận diện hình dạng CMLL. Ở bài trước, chúng ta đã "thử" tìm ra bốn góc bằng phép hoán vị ba góc. Bây giờ, hãy bắt đầu nhìn trước rồi mới làm: trước khi xoay tầng trên, hãy nhìn lướt qua hướng của mặt vàng trên bốn góc, xác định xem có 0, 1, 2 hay 4 góc "tốt" (đúng định hướng), sau đó thực hiện ngay động tác tương ứng. Bạn cũng có thể sử dụng một số lượng rất ít công thức để tăng đáng kể hiệu quả, điều này rất đáng giá. Phần lớn các công thức này không cần học thuộc lòng, bạn có thể vừa làm vừa hiểu.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Góc nhìn khi xây Khối thứ hai" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Hình trái: Góc nhìn khi xây Khối thứ hai. Khối đầu tiên đã hoàn thành, chỉ dùng bốn loại xoay R, r, M, U để chèn cặp góc-cạnh bên phải vào, Khối đầu tiên sẽ không bao giờ bị chạm vào. Hình phải: M' U M, một nhóm động tác được sử dụng nhiều nhất ở nửa sau của Roux. Tầng giữa lên, tầng trên xoay một chút, tầng giữa về vị trí cũ, ba bước này hoán đổi một cặp cạnh giữa tầng trên và tầng giữa.*

Bạn có thể tham khảo [Thư viện công thức phương pháp Roux](/vi/projects/rubiks-cube/roux#cmll) mà tôi đã tổng hợp. Trang CMLL là hai bước: 7 công thức định hướng + 2 công thức hoán vị vị trí, tổng cộng 9 công thức. Đây là lựa chọn tối ưu về mặt chi phí-hiệu quả để tăng tốc, rất dễ học, mỗi khi thành thạo một nhóm bạn có thể nhanh hơn khoảng 1–2 giây. Chỉ cần luyện tập một chút, bạn sẽ nhanh chóng thành thạo, một số công thức đã được giới thiệu trong bài viết trước, bạn không cần phải nhớ tất cả để có thể đạt dưới 30 giây.

![Bước đầu tiên của CMLL hai giai đoạn, bảy kiểu định hướng góc](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Hình: Bước đầu tiên của CMLL hai giai đoạn, bảy kiểu định hướng góc. Trong ảnh nhìn từ trên xuống, màu vàng là màu mặt trên, các thanh nhỏ bên ngoài chỉ ra màu mặt trên của góc đó hướng về phía cạnh bên. Nhận diện hình dạng theo số lượng góc màu vàng: 0 góc là H hoặc Pi, 1 góc là S hoặc AS, 2 góc là U, T hoặc L.*

Sau khi định hướng xong mặt vàng ở trên, bạn có thể sử dụng hai công thức này để định hướng các mặt bên của các góc.

Nếu có một mặt đã có màu đồng nhất, ví dụ màu đỏ đã ở cùng một mặt, hãy xoay nó sang bên trái, sau đó có thể chọn công thức hoán vị cạnh kề. Nếu không có mặt nào có màu đồng nhất, thì chọn công thức hoán vị chéo.

![Bước thứ hai của CMLL hai giai đoạn, hai kiểu vị trí góc](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Hình: Bước thứ hai của CMLL hai giai đoạn, hai kiểu vị trí góc. Trong hình bên trái, hai góc bên trái đã có màu đỏ đồng nhất, dùng hoán vị cạnh kề; trong hình bên phải, không có mặt nào đồng nhất, dùng hoán vị chéo.*

Bạn có thể thông qua việc slow solving rất nhiều để hiểu từng nhóm công thức, đừng coi chúng là những công thức khô khan, mà là một số động tác cố định. Bạn có thể tự mình khám phá ra những động tác này, nhưng việc liệt kê chúng ở đây sẽ giúp bạn không phải đi đường vòng.

Còn một điều nữa, hiệu quả hơn bất kỳ bài tập nào: hãy bỏ tiền mua một khối Rubik mới. Nếu khối Rubik bạn đang dùng vẫn là loại cũ kêu lạch cạch khi xoay và dễ bị kẹt, hãy mua một khối 3x3 hiện đại có từ tính. Khối Rubik mới nhất sẽ cho bạn cảm nhận được sức mạnh của kỹ thuật tối ưu hóa: xoay mượt mà, tự động căn chỉnh, và gần như không bao giờ bị kẹt. Chỉ riêng việc đổi Rubik thôi, thời gian trung bình của bạn có thể nhanh hơn ngay lập tức 15 giây. Lựa chọn đáng giá nhất là [MoYu RS3 M V5 (phiên bản từ tính + lõi bi)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), giá khoảng hai mươi đô la, đủ dùng cho đến khi đạt sub-20.

### Giai đoạn ba: 40 giây → 30 giây (Tuần 5 – Tuần 13, hai tháng)

**Dữ liệu**: Từ 7 tháng 6 đến 4 tháng 8. Ao100 từ 39.8 giây giảm xuống 29.9 giây, mất 58 ngày. Trong giai đoạn này, đôi khi có thể xuất hiện thành tích dưới 30 giây, nhưng đó chỉ là khi bạn rất may mắn. Hơn nữa, khi thời gian giải trung bình giảm xuống, độ khó để cải thiện 1 giây sẽ tăng theo cấp số nhân.

![Thành tích trung bình hàng ngày](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Hình: Thành tích trung bình hàng ngày. Sau giữa tháng 6, đường cong gần như đi ngang, tôi đã "mài giũa" trong khoảng 30–40 giây suốt hai tháng.*

Đây là giai đoạn "giậm chân tại chỗ". Ai cũng sẽ gặp phải, và tôi đã ở đây hai tháng.

**Bạn gặp khó khăn ở đâu**: Sáu cạnh tầng trên cùng rất chậm để giải, không hiểu logic, mỗi lần đều phải thử đi thử lại, tốn rất nhiều thời gian. Khối đầu tiên và Khối thứ hai vẫn chưa đủ thành thạo.

**Cần luyện gì**:

- Nhận diện EO (Định hướng cạnh). Như đã nói ở bài trước, chỉ có vài trường hợp cạnh sai định hướng: 0, không 0 không 4, 4 (2 trên 2 dưới), 4 (tất cả ở tầng trên), 4 (3 trên 1 dưới). Mục tiêu của giai đoạn này là: ngay khi xây xong hai khối, không cần đếm, nhìn một cái là biết ngay là trường hợp nào. Cách luyện tập là sau khi xáo trộn, chỉ giải đến hết CMLL, sau đó dừng lại, nói ra số lượng cạnh sai định hướng, rồi tiếp tục.
- Nhiều người không hiểu các động tác ở đây. Giai đoạn EO cuối cùng đều nhằm mục đích tạo ra hình mũi tên với 3 cạnh sai định hướng ở tầng trên và 1 cạnh ở tầng dưới. Bởi vì trạng thái hoàn chỉnh chỉ cần xáo trộn một bước là sẽ ra hình mũi tên, nên suy nghĩ ngược lại, nó chính là bước cuối cùng trước khi hoàn thành. Vì vậy, bất kể có bao nhiêu cạnh sai định hướng, mục tiêu cuối cùng vẫn là tạo ra một mũi tên. Với 4 cạnh sai định hướng ở trên, hãy hoán đổi một cặp cạnh trên-dưới để đưa một cạnh sai định hướng xuống dưới, tạo thành mũi tên. Với 2 cạnh sai định hướng ở trên và 2 ở dưới, hãy hoán đổi một cặp cạnh trên-dưới để đưa một cạnh sai định hướng lên trên, tạo thành mũi tên. Nếu có 1 cạnh trên và 1 cạnh dưới, hoặc 2 cạnh trên, thì dùng M' U M để biến thành các trường hợp trước đó, rồi tạo mũi tên. Bạn có thể tự mình khám phá ra các bước tối ưu cho trường hợp 1/1 thông qua việc quan sát và suy nghĩ rất nhiều.
- Luyện tập look-ahead (dự đoán trước) rất nhiều. Đây là điều quan trọng nhất để đi từ 40 giây xuống 30 giây, và cũng là điều phản trực giác nhất: xoay chậm hơn một chút, nhìn xa hơn một chút. Khi xây Khối đầu tiên, đừng nhìn vào khối đang được chèn vào, hãy nhìn xem khối tiếp theo ở đâu. Ban đầu sẽ rất khó chịu, thành tích có thể sẽ tệ hơn, nhưng hãy kiên trì một tuần, mọi thứ sẽ đột nhiên tốt lên.
- CMLL không do dự. Nếu bạn vẫn phải suy nghĩ mỗi khi thực hiện một động tác, thì nó vẫn chưa phải là của bạn. Hãy luyện tập từng động tác riêng lẻ 50 lần, cho đến khi thấy hình dạng là tay tự động di chuyển.

![Dạng mũi tên](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Hình: Dạng mũi tên. Ba cạnh sai định hướng ở tầng trên (màu xanh lam nổi bật) xếp thành một mũi tên, chỉ về cạnh sai định hướng ở tầng dưới. Lúc này, một động tác M' U M có thể đưa cả bốn cạnh về đúng vị trí cùng lúc. [Mở trạng thái này trong khối Rubik 3D](/vi/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) để xem từng bước.*

![Sáu dạng EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Hình: Sáu dạng EO (Định hướng cạnh). Nhãn ở góc trên bên trái là số lượng cạnh sai định hướng (trên / dưới), màu vàng là cạnh đúng định hướng, khung màu xanh lam là cạnh sai định hướng. Chỉ có hình mũi tên là cần công thức, năm dạng còn lại đều phải biến đổi thành dạng mũi tên trước.*

Để giải các cạnh bên trái và bên phải, ở đây, lấy màu vàng làm mặt trên, màu trắng làm mặt dưới, và khối đầu tiên là màu đỏ làm ví dụ. Vậy thì, cần tiếp tục đưa về đúng vị trí là cạnh vàng-đỏ + cạnh vàng-cam (phần nổi bật). Ý tưởng chính là tìm cách hoán đổi cạnh vàng-đỏ xuống mặt dưới thông qua hoán đổi cạnh trên-dưới, cạnh vàng-cam cũng hoán đổi xuống mặt dưới. Khi hai cạnh này ở mặt dưới và đối diện nhau, sau đó xoay mặt trên đến vị trí thích hợp, M2 U hoặc M2 U' là có thể giải được các cạnh trái phải của tầng U.

Để giúp mọi người dễ hiểu hơn, tôi đã tổng hợp sáu dạng của EO trên [trang LSE của Thư viện công thức phương pháp Roux](/vi/projects/rubiks-cube/roux#lse). Mỗi hình khi nhấp vào "Xem chi tiết" sẽ mở trạng thái tương ứng trong khối Rubik 3D, với các cạnh sai định hướng được tự động làm nổi bật. Trên cùng trang đó còn có tất cả các trường hợp của việc định hướng UL/UR và bốn cạnh cuối cùng.

Việc giảm lượng luyện tập trong giai đoạn này không phải là điều xấu. Giai đoạn "giậm chân tại chỗ" không thể vượt qua bằng cách tăng cường độ luyện tập mà phải bằng cách sửa một thói quen xấu cụ thể. Kinh nghiệm của tôi là mỗi lần chỉ sửa một thói quen.

### Giai đoạn bốn: 30 giây → 28 giây (Sau tuần 13)

**Dữ liệu**: Sau ngày 4 tháng 8. Trong cả tháng 9, số lần luyện tập được ghi lại là 122 lần, nhưng thực tế có rất nhiều lần không được ghi lại. Tôi đã biến khối Rubik thành một món đồ chơi trên bàn làm việc, tiện tay lấy ra chơi: khi tâm trạng tốt thì chơi vài ván, khi bồn chồn lo lắng cũng chơi vài ván, khi giải lao giữa công việc chơi vài ván, khi buồn chán cũng chơi vài ván, để việc chơi Rubik hòa nhập vào cuộc sống. Ao100 cũng dần giảm từ 29.9 xuống 28.2.

**Bạn gặp khó khăn ở đâu**: Không có nút thắt cổ chai rõ ràng, chỉ đơn giản là chưa đủ thành thạo.

**Cần luyện gì**:

Nếu tốc độ trung bình của bạn vẫn trên 30 giây, thì điều duy nhất bạn cần làm là tiếp tục luyện tập thật nhiều, chứ không phải đi học thuộc công thức mới.

Liên tục luyện tập look-ahead thông qua slow solving, bạn sẽ ngày càng nhanh hơn.

Cứ rảnh rỗi là lấy Rubik ra chơi, đặt khối Rubik ở nơi bạn dễ dàng với tới, ví dụ như bàn làm việc, bạn có thể lấy ra chơi ngay sau giờ làm. Bạn cũng có thể thường xuyên quay video các lần giải của mình để xem giai đoạn nào tốn nhiều thời gian nhất, sau đó tối ưu hóa có mục tiêu, đây chính là luyện tập có chủ đích. Tốc độ tiến bộ của bạn không phụ thuộc vào tổng số lần luyện tập thông thường, mà là số lần luyện tập có chủ đích của bạn.

Sau đó bạn sẽ nhận ra, sau khi vượt qua giai đoạn "giậm chân tại chỗ" ở mức 30–35 giây, tốc độ của bạn lại giảm thêm một bậc.

Đến giai đoạn này thì xin chúc mừng bạn, trong mắt người mới chơi, bạn đã là một người chơi rất giỏi rồi!

## Cái giá của việc không học công thức

Nói đến đây, tôi phải thành thật một chút. Việc không học công thức không phải là miễn phí.

- Giai đoạn CMLL chậm. 42 trường hợp được giải quyết bằng 9 công thức, điều này có nghĩa là một số trường hợp sẽ phải làm hai lần. Những người học thuộc toàn bộ CMLL sẽ nhanh hơn tôi hai ba giây ở bước này.
- Kỹ thuật xoay tầng M có ngưỡng cao. Nửa sau của phương pháp Roux hoàn toàn dựa vào tầng M. Tầng M khó xoay hơn R và U, dễ xoay bị kẹt, và cũng đòi hỏi khối Rubik phải có chất lượng tốt hơn.

Đừng lo lắng về giới hạn. Ngay cả trong số các tuyển thủ hàng đầu, cũng có người dùng Roux để lọt vào top thế giới, bản thân phương pháp này không có giới hạn. Nhưng để xuống dưới 15 giây, khả năng cao bạn sẽ phải học thuộc đầy đủ 42 công thức CMLL. Tuy nhiên, đó là chuyện của một giai đoạn khác. Để xuống dưới 30 giây, thì không cần.

Hơn nữa, hầu hết mọi người chơi giải Rubik một tay đẳng cấp thế giới đều sử dụng phương pháp Roux, vì nó thực sự rất phù hợp cho việc thao tác bằng một tay.

**Thành tích nhanh nhất khi dùng Roux trong các giải đấu chính thức (WCA):**

- Single 4.11 giây, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Philippines), Valenzuela Cubing Open 2023, được công nhận là single nhanh nhất của Roux trong các giải chính thức ([video tái tạo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Average 5.98 giây, cũng là anh ấy, năm 2019, lúc đó là kỷ lục châu Á, và là người thứ ba trong lịch sử đạt average sub-6 chính thức ([dữ liệu WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- Anh ấy cũng là [người giữ kỷ lục thế giới một tay](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): average 8.09, single 6.05 (2024), cộng đồng chơi một tay thường cho rằng Roux là phương pháp tối ưu nhất.

Tôi nghĩ đây là một cuộc trao đổi rất đáng giá. Bạn đổi lấy hai ba giây thời gian ở bước CMLL để có được: hiểu rõ mình đang làm gì ở mỗi bước, không quên cách giải dù không chạm vào Rubik ba tháng, và có thể tự suy luận ra cách giải cho bất kỳ khối Rubik nào chưa từng thấy.

## Tóm tắt

![Hoàn thành giải](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Để đi từ việc có thể giải được Rubik đến dưới 30 giây, đó không phải là một quá trình học thuộc công thức, mà là một quá trình rèn luyện sự phối hợp nhịp nhàng giữa tay, mắt và não bộ.

Bốn giai đoạn, bốn việc cần làm: trước tiên học cách quan sát mà không xoay cả khối Rubik, sau đó học cách xây Khối thứ hai mà không làm hỏng Khối đầu tiên, tiếp theo học cách nhìn trước bước tiếp theo khi đang thực hiện bước hiện tại, và cuối cùng là để tay theo kịp mắt.

Công thức không phải là nguồn gốc của tốc độ. Khả năng quan sát mới là yếu tố quyết định.

Hãy học cách tạo ra phản hồi tích cực thông qua sự tiến bộ ở mỗi khâu, ngay cả việc luyện tập thành thạo cũng sẽ không còn nhàm chán, đặc biệt là khi bạn bất ngờ phá kỷ lục cá nhân một lần nữa. Đặc biệt ở giai đoạn sơ cấp và trung cấp, bạn sẽ trải nghiệm niềm vui phá kỷ lục mỗi ngày.

Tất cả các công thức và trường hợp trong bài viết, tôi đều đã tổng hợp trong [Thư viện công thức phương pháp Roux](/vi/projects/rubiks-cube/roux), bạn có thể quay lại tra cứu khi gặp khó khăn.

Thế giới Rubik có niềm vui bất tận, chúc bạn chơi vui vẻ.

## Phụ lục 1: Danh sách luyện tập theo từng giai đoạn

**Giai đoạn một (> 60 giây)**

- Giữ nguyên vị trí quan sát, không xoay cả khối Rubik trong suốt quá trình giải.
- Tìm thấy màu mong muốn tiếp theo mà không cần dừng lại.
- Slow solving, nói ra ý định của từng bước.
- Chỉ luyện Khối đầu tiên, lặp lại 50 lần.

**Giai đoạn hai (60 → 40 giây)**

- Khối thứ hai chỉ dùng R, r, M, U, không chạm vào Khối đầu tiên.
- Luyện tập CMLL hai giai đoạn.
- Luyện tập nhịp điệu M' U M' U, 5 phút mỗi ngày.

**Giai đoạn ba (40 → 30 giây)**

- Dừng lại ngay khi hoàn thành CMLL, nhìn một cái là nói ra được số cạnh sai định hướng.
- Slow solving + look-ahead: mắt luôn nhìn vào khối tiếp theo.
- Giải ít nhất 20 lần chất lượng cao mỗi ngày.

**Giai đoạn bốn (< 30 giây)**

- Quay video để tìm những chỗ dừng lại.
- Kỹ thuật ngón tay: Finger tricks R U R' U' bằng một ngón, ngón áp út cho tầng M.
- Giải 20 lần chất lượng cao mỗi ngày, không cần tăng số lượng quá mức.

## Phụ lục 2: Công cụ

- **csTimer**: [cstimer.net](https://cstimer.net/). Mở thống kê Ao5 / Ao12 / Ao100, Ao100 mới là trình độ thực sự của bạn, thành tích single đôi khi là do may mắn.
- **Rubik 3D**: [philoli.com/zh/projects/rubiks-cube](/vi/projects/rubiks-cube/). Tất cả các công thức trong bài viết này đều có thể nhập vào đây để xem hoạt ảnh.
- **Thư viện công thức phương pháp Roux thân thiện với người mới**: [philoli.com/zh/projects/rubiks-cube/roux](/vi/projects/rubiks-cube/roux). Các cách chèn phổ biến cho Khối đầu tiên và Khối thứ hai, 9 công thức CMLL hai giai đoạn, và tất cả các trường hợp của LSE (EO, UL/UR, bốn cạnh cuối cùng). Mỗi hình đều có thể mở trong Rubik 3D, tự động ẩn các khối không liên quan và làm nổi bật các cạnh cần di chuyển.
- **Công cụ phân tích luyện tập csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/vi/projects/rubiks-cube/analyzer). Kéo thả file xuất từ csTimer vào đây, bạn sẽ thấy xu hướng thành tích của mình, đường cong Ao5/Ao12/Ao100, các lần phá PB, bảng cột mốc (ngày đầu tiên đạt sub-60, sub-40, sub-30 là khi nào) và đường cong luyện tập theo quy luật Power Law. Tất cả các hình trong bài viết này đều được tạo ra từ đây. Dữ liệu chỉ được xử lý trong trình duyệt của bạn, không được tải lên. Nếu không có file xuất, bạn có thể thử tải dữ liệu 4441 lần của tôi để xem hiệu quả.

*Bài viết này chứa các liên kết liên kết Amazon: Khi bạn mua hàng qua các liên kết này, tôi sẽ nhận được một khoản hoa hồng nhỏ, giá của bạn không thay đổi.*

## Đọc thêm

- [Làm thế nào để giải Rubik mà không cần học công thức: Ai cũng có thể hiểu](/vi/blog/solve-rubiks-cube-without-formulas)
