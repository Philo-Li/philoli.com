---
layout: blog
title: "Làm thế nào để giải Rubik dưới 30 giây mà không cần học thuộc công thức: Ngay cả học sinh tiểu học cũng có thể hiểu"
date: 2026-10-09 12:00:00
tags:
  - Rubik
  - hướng dẫn
  - Phương pháp Roux
  - xoay nhanh
  - luyện tập có chủ đích
categories: 日常折腾
description: "Mất 89 ngày từ lần giải đầu tiên đến khi đạt Ao100 dưới 30 giây, không học thuộc bất kỳ công thức CFOP nào. Phân tích bốn giai đoạn bằng 4441 dữ liệu thời gian: mỗi giai đoạn gặp khó khăn ở đâu, nên luyện gì, và tại sao phương pháp Roux Bridge không cần học thuộc công thức."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Bốn giai đoạn từ 165 giây xuống 28 giây" />
</figure>

*Ảnh: Bốn giai đoạn từ 165 giây xuống 28 giây. Giai đoạn hai giảm nhanh nhất, giai đoạn ba là giai đoạn trì trệ dài nhất.*

Trong bài viết trước [《Cách giải Rubik mà không cần học thuộc công thức》](/zh/blog/solve-rubiks-cube-without-formulas/), bạn đã học được cách sử dụng logic hoán vị để giải Rubik mà không cần thuộc lòng công thức. Bài viết đó đã nhận được rất nhiều phản hồi tích cực.

Nếu bạn đã làm theo, hiện tại bạn có thể mất khoảng hai đến ba phút để giải khối Rubik, dù có hơi lúng túng một chút. Sau đó, một câu hỏi mới sẽ nảy sinh: làm thế nào để nhanh hơn?

Nếu bạn tìm kiếm "giải Rubik nhanh", tất cả các hướng dẫn sẽ nói với bạn cùng một điều: muốn xuống dưới 30 giây, trước tiên hãy học thuộc các công thức CFOP. 41 công thức F2L, 57 công thức OLL, 21 công thức PLL, tổng cộng 119 công thức. Ngay cả khi bạn làm F2L bằng trực giác, bạn cũng không thể tránh khỏi 78 công thức lớp trên cùng. Không học thuộc được thì đừng nghĩ đến việc nhanh.

Bài viết này muốn cho bạn biết rằng, bạn hoàn toàn có thể đạt được tốc độ dưới 30 giây mà không cần học thuộc bất kỳ công thức nào.

<!--more-->

Tôi bắt đầu từ ngày 7 tháng 5 năm 2026, khi lần đầu tiên giải được Rubik, cho đến ngày 4 tháng 8, khi Ao100 của tôi xuống dưới 30 giây, tôi đã mất 89 ngày. Trong suốt thời gian đó, tôi không hề học thuộc một công thức CFOP nào, chỉ đơn thuần chơi trong thời gian rảnh. Đây là dữ liệu thời gian của 4441 lần giải mà tôi đã ghi lại.

![Đường cong thành tích của 4441 lần giải](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Ảnh: Đường cong thành tích của 4441 lần giải. Đường màu xám là thời gian của mỗi lần giải, đường màu đậm là xu hướng Ao100, các chấm đỏ là những lần phá kỷ lục cá nhân. Ao100 tốt nhất là 28.22 giây.*

Với việc luyện tập chủ động, có ý thức và duy trì tần suất, bất kỳ ai cũng có thể đạt được tốc độ dưới 30 giây (sub-30) từ con số 0 chỉ trong vài tháng.

Dưới 30 giây là khái niệm như thế nào? Tại [Giải vô địch Rubik thế giới lần thứ nhất năm 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), thành tích của nhà vô địch là 22.95 giây, đây cũng là kỷ lục thế giới chính thức đầu tiên được WCA công nhận sau này; người đứng thứ 10 là 29.11 giây, và người đạt được thành tích này chính là Jessica Fridrich, người sáng tạo ra CFOP mà chúng ta sẽ nói đến ở phần tiếp theo. Nói cách khác, một người chơi nghiệp dư ngày nay luyện tập để đạt sub-30 trong vài tháng, nếu đặt vào năm 1982, có thể lọt vào top 10 thế giới.

Tiếp theo, tôi sẽ chia sẻ với bạn cách tôi đã từng bước đạt được điều đó, và toàn bộ phương pháp luyện tập sẽ được chia sẻ một cách đầy đủ.

## Tại sao thế giới xoay nhanh lại học thuộc công thức?

Trước tiên, hãy cùng làm rõ một điều: tại sao "nhanh" và "học thuộc công thức" lại gắn liền với nhau trong suy nghĩ của mọi người?

Vào đầu những năm 1980, giáo sư gốc Séc Jessica Fridrich (sau này nghiên cứu pháp y số tại Đại học Binghamton, Hoa Kỳ) đã tổng hợp một bộ phương pháp giải theo từng lớp, sau này được gọi là CFOP (Cross, F2L, OLL, PLL). Ý tưởng của phương pháp này là: liệt kê tất cả các trường hợp có thể xảy ra ở lớp trên cùng, và mỗi trường hợp sẽ có một công thức tối ưu. Bạn chỉ cần nhận diện trường hợp và thực hiện công thức, không cần suy nghĩ.

![Jessica Fridrich và khối Rubik trong văn phòng của bà](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Ảnh: Jessica Fridrich và khối Rubik trong văn phòng của bà. Năm 1982, bà đạt 29.11 giây và đứng thứ 10 tại Giải vô địch thế giới lần đầu tiên, CFOP được đặt theo tên của bà (Fridrich Method).*

Phương pháp này rất nhanh. Hầu như tất cả các kỷ lục thế giới đều được thiết lập bằng CFOP. Vì vậy, tất cả các hướng dẫn đều dạy nó, tất cả các video đều nói về nó, "học xoay nhanh" đồng nghĩa với "học CFOP", và học CFOP đồng nghĩa với việc học thuộc 119 công thức.

Nhưng hãy lưu ý, "học thuộc công thức" là đặc điểm của riêng phương pháp CFOP, chứ không phải là đặc điểm của bản thân tốc độ. CFOP cần học thuộc vì nó chọn con đường liệt kê. Liệt kê đòi hỏi ghi nhớ, đó là cái giá phải trả.

Vậy có phương pháp nào không đi theo con đường liệt kê không? Có.

## Phương pháp giải không cần công thức: Roux Bridge

Năm 2003, người Pháp Gilles Roux đã công bố một ý tưởng hoàn toàn khác. Thay vì xếp từng lớp một, phương pháp này bắt đầu bằng việc xây hai "cây cầu" 1×2×3 ở hai bên, sau đó xử lý bốn góc ở lớp trên cùng, và cuối cùng chỉ còn sáu cạnh, kết thúc bằng hai loại xoay là lớp giữa M và lớp trên cùng U.

![Gilles Roux trong một cuộc thi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Ảnh: Gilles Roux trong một cuộc thi. Cắt từ video thi đấu những năm đầu, hình ảnh đã được AI phục hồi và phóng to.*

Trong bài trước, chúng ta đã giải Rubik một lần bằng khung phương pháp này. Bây giờ hãy cùng xem lại bốn bước của nó, lần này chúng ta sẽ tập trung vào "những gì cần ghi nhớ ở mỗi bước":

| Bước | Nội dung | Công thức cần học thuộc |
| --- | --- | --- |
| 1. Khối trái | Xây một khối 1×2×3 | 0 công thức, thuần quan sát |
| 2. Khối phải | Xây khối đối xứng còn lại | 0 công thức, thuần quan sát |
| 3. CMLL | Đặt bốn góc lớp trên cùng vào đúng vị trí | 9 công thức, tất cả đều có thể suy ra từ hoán vị 3 góc |
| 4. LSE | Sáu cạnh cuối cùng | 0 công thức, chỉ sử dụng các phép quay lớp trên cùng (U) và lớp giữa (M) |

Trong bốn bước, có ba bước không cần bất kỳ công thức nào. Với CMLL duy nhất cần dùng, tổng cộng có 42 trường hợp, nhưng bạn không cần đến 42 công thức. Công thức hoán vị ba góc R U' L' U R' U' L U đã được đề cập ở bài trước, cùng với các phiên bản đối xứng và một vài biến thể của nó, có thể bao quát tất cả các trường hợp, chỉ là sẽ chậm hơn một chút.

![Bốn bước của phương pháp Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Ảnh: Bốn bước của phương pháp Roux, mỗi bước chỉ hiển thị các khối đã được đặt đúng vị trí cho đến bước đó: Khối trái → Khối phải → CMLL (bốn góc lớp trên) → LSE (sáu cạnh cuối). Cắt từ bảng "Giải pháp" trên trang 3D Rubik của tôi.*

Đây là lý do tại sao Roux không cần học thuộc công thức: nó nén phần cần ghi nhớ vào một góc rất nhỏ, phần còn lại hoàn toàn dựa vào quan sát, hiểu biết và sự thành thạo.

## Từ 165 giây xuống 28 giây: Bốn giai đoạn

Dưới đây là con đường tôi đã thực sự đi qua. Tôi đã đánh dấu điểm bắt đầu và kết thúc của từng giai đoạn bằng dữ liệu, sau đó giải thích tôi đã gặp khó khăn ở đâu và luyện tập gì trong giai đoạn đó. Điểm nghẽn của bạn có thể khác tôi, nhưng thứ tự thì rất có thể sẽ giống nhau.

![Khoảng thời gian của bốn giai đoạn](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Ảnh: Khoảng thời gian của bốn giai đoạn. Giai đoạn một 3 tuần, giai đoạn hai 11 ngày, giai đoạn ba hai tháng, giai đoạn bốn cho đến nay.*

### Giai đoạn một: 165 giây → 60 giây (Tuần 1–3)

**Dữ liệu**: Từ 7 tháng 5 đến 27 tháng 5. Tuần đầu tiên trung bình 165 giây, tuần thứ ba 68 giây.

**Gặp khó khăn ở đâu**: Khối trái rất không thành thạo, phải tìm rất lâu cho mỗi cặp màu. Sau khi tìm được một cặp, người mới chơi thường có xu hướng dừng lại để tiếp tục quan sát.

![Thời gian của người mới chơi thường dùng vào việc gì](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Ảnh: Thời gian của người mới chơi thường dùng vào việc gì. Tay dừng lại, mắt đảo qua lại trên khối Rubik để tìm, thời gian "tìm kiếm" gấp nhiều lần thời gian "xoay".*

**Nên luyện gì**:

Kẻ thù lớn nhất trong giai đoạn này không phải là tay chậm, mà là mắt chậm. Thời gian bạn dành để "tìm kiếm" nhiều hơn rất nhiều so với thời gian "xoay". Vì vậy:

- Cố định góc quan sát, không xoay cả khối Rubik. Như đã nói ở bài trước, góc quan sát của Roux là cố định. Giai đoạn này cần biến việc "không lật khối Rubik" thành phản xạ có điều kiện. Mỗi khi muốn lật khối Rubik, hãy dừng lại và tự hỏi: từ góc này, mình có thể nhìn thấy khối mình cần không?
- Xoay chậm. Không bấm giờ, nhưng các động tác trước và sau phải liền mạch, không có bất kỳ sự ngắt quãng nào. Mỗi động tác có thể rất chậm, nhưng tuyệt đối không được dừng lại. Mấu chốt là khi tay đang thực hiện động tác trước, mắt phải tập trung vào động tác tiếp theo – đây là cốt lõi của việc xoay chậm. Nghe có vẻ như đang làm chậm lại, nhưng thực chất là đang rèn luyện mắt bạn nhìn thấy mối quan hệ giữa vị trí của khối hiện tại và vị trí nó cần đến.
- Chỉ luyện khối trái. Xoay lung tung, xây khối trái, rồi lại xoay lung tung, lại xây khối trái. Đừng làm các bước tiếp theo. Khối trái là bước tự do nhất trong Roux, và cũng là bước rèn luyện khả năng quan sát tốt nhất.

Đừng học bất kỳ công thức mới nào trong giai đoạn này. Nút thắt cổ chai của bạn hiện tại không nằm ở công thức.

### Giai đoạn hai: 60 giây → 40 giây (Tuần 4–5)

**Dữ liệu**: Từ 27 tháng 5 đến 7 tháng 6, tổng cộng 11 ngày. Đây là giai đoạn giảm tốc độ nhanh nhất trong toàn bộ quá trình, và cũng là giai đoạn tôi luyện tập nhiều nhất, với 723 lần trong tuần đầu tiên của tháng 6.

**Gặp khó khăn ở đâu**: Các động tác không liền mạch. Khối Rubik bị kẹt.

**Nên luyện gì**:

Trong giai đoạn này, bạn cần tối ưu hóa các động tác ở từng bước, trên cơ sở hiểu biết, tăng cường sự thành thạo của mỗi động tác.

- Khối phải. Khối phải khó hơn khối trái vì không gian ít hơn một nửa, và không được phá hủy khối trái đã hoàn thành. Các phép quay then chốt là R, r (hai lớp bên phải), M, U. Giai đoạn này cần học cách dùng r và M thay cho R để di chuyển các khối, nhờ đó khối trái sẽ không bao giờ bị phá hủy. Tối ưu hóa các bước động tác chính là tiết kiệm thời gian. Ví dụ, thay vì quay ba lần theo chiều kim đồng hồ, ta có thể quay một lần ngược chiều kim đồng hồ.
- Thành thạo sử dụng lớp M. Bước cuối cùng của Roux hoàn toàn là M và U, việc xoay lớp M có trơn tru hay không trực tiếp quyết định giới hạn dưới của bạn. Dùng ngón áp út hoặc ngón giữa để đẩy M, bắt đầu luyện tập nhịp điệu M' U M' U.
- CMLL nhận diện hình dạng. Trong bài trước, chúng ta đã dùng hoán vị ba góc để "thử" ra bốn góc. Bây giờ, hãy bắt đầu "nhìn rồi làm": trước khi lật lớp trên cùng, hãy nhìn nhanh hướng màu vàng của bốn góc để xác định xem có 0, 1, 2 hay 4 góc đúng, sau đó thực hiện động tác tương ứng. Bạn cũng có thể đạt được sự cải thiện hiệu quả đáng kể với rất ít công thức, điều này rất đáng giá. Phần lớn các công thức này không cần phải học thuộc lòng, mà hãy vừa làm vừa hiểu.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Góc nhìn khi xây khối phải" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Ảnh trái: Góc nhìn khi xây khối phải. Khối trái đã hoàn thành, chỉ dùng bốn phép quay R, r, M, U để lắp cặp góc-cạnh bên phải vào, khối trái sẽ không bao giờ bị chạm tới. Ảnh phải: M' U M, một nhóm động tác được dùng nhiều nhất ở nửa sau của Roux. Lớp giữa lên, lớp trên xoay một chút, lớp giữa về lại, ba bước này hoán đổi một cặp cạnh ở lớp trên và lớp giữa.*

Bạn có thể tham khảo [Thư viện công thức Phương pháp Roux](/zh/projects/rubiks-cube/roux#cmll) mà tôi đã tổng hợp. Trang CMLL là hai giai đoạn: 7 công thức định hướng + 2 công thức hoán vị, tổng cộng 9 công thức. Đây là lựa chọn tối ưu về hiệu suất cho việc tăng tốc độ, rất dễ học, mỗi khi thành thạo một nhóm bạn có thể nhanh hơn khoảng 1–2 giây. Chỉ cần luyện tập một chút, bạn sẽ nhanh chóng thành thạo, một số đã được giới thiệu trong bài viết trước, và bạn không cần phải ghi nhớ tất cả để có thể đạt được tốc độ dưới 30 giây.

![CMLL hai giai đoạn bước một, bảy hướng của khối góc](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Ảnh: CMLL hai giai đoạn bước một, bảy hướng của khối góc. Trong hình nhìn từ trên xuống, màu vàng là màu mặt trên, các thanh nhỏ ở bên ngoài biểu thị màu mặt trên của góc đó hướng ra cạnh bên. Nhận diện hình dạng theo số lượng góc màu vàng: 0 góc là H hoặc Pi, 1 góc là S hoặc AS, 2 góc là U, T hoặc L.*

Sau khi đã căn chỉnh các mặt vàng lên trên, bạn có thể sử dụng hai công thức này để căn chỉnh các mặt bên của khối góc.

Nếu có một mặt đã cùng màu, ví dụ màu đỏ đã ở cùng một mặt, hãy xoay nó sang bên trái, sau đó chọn công thức hoán đổi kề. Nếu không có mặt nào cùng màu, hãy chọn công thức hoán đổi đối diện.

![CMLL hai giai đoạn bước hai, hai vị trí của khối góc](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Ảnh: CMLL hai giai đoạn bước hai, hai vị trí của khối góc. Hình bên trái, hai góc bên trái đã cùng màu đỏ, dùng hoán đổi kề; hình bên phải không có mặt nào cùng màu, dùng hoán đổi đối diện.*

Bạn có thể hiểu từng nhóm công thức thông qua việc xoay chậm nhiều lần. Đừng coi chúng là công thức, mà là một số động tác cố định; bạn cũng có thể tự mình khám phá ra những động tác này nếu từ từ tìm tòi, nhưng việc liệt kê chúng ở đây có thể giúp bạn tránh đi đường vòng.

Còn một điều nữa, hiệu quả tức thì hơn bất kỳ bài tập nào: hãy đầu tư một chút tiền để mua một khối Rubik mới. Nếu khối bạn đang dùng vẫn là loại cũ kỹ, kêu lạch cạch khi xoay và dễ bị kẹt khi xoay quá đà, hãy mua một khối 3x3 hiện đại có nam châm. Khối Rubik mới nhất sẽ cho bạn cảm nhận được sức mạnh của kỹ thuật tối ưu hóa, xoay mượt mà, tự động căn chỉnh, gần như không bao giờ bị kẹt. Chỉ riêng việc đổi khối Rubik thôi, thành tích trung bình của bạn có thể nhanh hơn đến 15 giây. Lựa chọn đáng giá nhất là [MoYu RS3 M V5 (phiên bản từ tính + lõi bi)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), khoảng hai mươi đô la, đủ tốt để bạn đạt sub-20.

### Giai đoạn ba: 40 giây → 30 giây (Tuần 5 – Tuần 13, hai tháng)

**Dữ liệu**: Từ 7 tháng 6 đến 4 tháng 8. Ao100 giảm từ 39.8 giây xuống 29.9 giây, mất 58 ngày. Trong giai đoạn này, đôi khi có thể xuất hiện thành tích dưới 30 giây, nhưng chỉ khi rất may mắn. Hơn nữa, khi thời gian giải trung bình giảm xuống, độ khó để cải thiện thêm 1 giây sẽ tăng theo cấp số nhân.

![Thành tích trung bình hàng ngày](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Ảnh: Thành tích trung bình hàng ngày. Sau giữa tháng 6, đường cong gần như đi ngang, tôi đã "mài giũa" trong khoảng 30–40 giây suốt hai tháng.*

Đây là giai đoạn trì trệ. Ai cũng sẽ gặp phải, và tôi đã ở đây suốt hai tháng.

**Gặp khó khăn ở đâu**: Sáu cạnh ở lớp trên cùng được giải rất chậm, không hiểu logic, mỗi lần đều phải thử đi thử lại, lãng phí rất nhiều thời gian. Khối trái và khối phải vẫn chưa đủ thành thạo.

**Nên luyện gì**:

- Nhận diện EO (Edge Orientation). Bài trước đã nói, chỉ có vài trường hợp cạnh sai hướng: 0, không 0 và không 4, 4 (2 trên, 2 dưới), 4 (tất cả trên lớp U), 4 (3 trên, 1 dưới). Mục tiêu của giai đoạn này là: ngay khi khối cầu được xây xong, không cần đếm, nhìn một cái là biết thuộc trường hợp nào. Cách luyện tập là sau khi xáo trộn, chỉ giải đến khi hoàn thành CMLL, sau đó dừng lại, nói ra số cạnh sai hướng, rồi tiếp tục.
- Nhiều người không hiểu các động tác ở đây. Giai đoạn EO cuối cùng là để tạo ra hình mũi tên với 3 cạnh sai hướng ở trên và 1 cạnh sai hướng ở dưới. Vì trạng thái hoàn chỉnh chỉ cần xáo trộn một bước là sẽ ra hình mũi tên, nên theo tư duy ngược, đây chính là bước cuối cùng trước khi hoàn thành khối Rubik. Vì vậy, bất kể số lượng cạnh sai hướng là bao nhiêu, mục đích cuối cùng là tạo ra một mũi tên. Nếu có 4 cạnh sai hướng ở trên, hãy hoán đổi một cặp cạnh trên-dưới để đưa một cạnh sai hướng xuống dưới, tạo thành mũi tên. Nếu có 2 cạnh trên và 2 cạnh dưới sai hướng, hãy hoán đổi một cặp cạnh trên-dưới để đưa một cạnh sai hướng lên trên, tạo thành mũi tên. Nếu có 1 cạnh trên và 1 cạnh dưới sai hướng, hoặc 2 cạnh trên sai hướng, hãy dùng M' U M để chuyển về các trường hợp trước, sau đó tạo mũi tên. Bạn có thể tự mình khám phá các bước tối ưu cho trường hợp 1/1 thông qua việc quan sát và suy nghĩ nhiều.
- Luyện tập dự đoán (Look-ahead) thật nhiều. Đây là điều quan trọng nhất để từ 40 giây xuống 30 giây, và cũng là điều đi ngược lại trực giác nhất: xoay chậm hơn một chút, nhìn xa hơn một chút. Khi xây khối trái, mắt đừng nhìn khối đang được lắp vào, mà hãy nhìn xem khối tiếp theo ở đâu. Ban đầu sẽ rất khó chịu, thành tích sẽ tệ hơn, nhưng nếu kiên trì một tuần, mọi thứ sẽ đột nhiên tốt lên.
- CMLL không do dự. Nếu một động tác mà bạn luôn phải suy nghĩ một chút mới dám làm, thì nó vẫn chưa phải là của bạn. Hãy luyện tập riêng từng động tác 50 lần, cho đến khi nhìn thấy hình dạng là tay tự động di chuyển.

![Hình dạng mũi tên](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Ảnh: Hình dạng mũi tên. Ba cạnh sai hướng ở lớp trên cùng (được tô sáng màu xanh lục) xếp thành hình mũi tên, chỉ vào cạnh sai hướng ở lớp dưới cùng. Lúc này, chỉ cần một động tác M' U M là có thể đưa cả bốn cạnh về đúng vị trí cùng lúc. Bạn có thể [mở trạng thái này trong 3D Rubik](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) để xem từng bước.*

![Sáu hình thái của EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Ảnh: Sáu hình thái của EO. Nhãn ở góc trên bên trái là số cạnh sai hướng (trên / dưới), màu vàng là cạnh đúng hướng, khung xanh lam là cạnh sai hướng. Chỉ có hình mũi tên là cần công thức, năm loại còn lại đều phải chuyển thành mũi tên trước.*

Để giải các cạnh bên trái và phải, hãy lấy mặt vàng làm trên, mặt trắng làm dưới, và khối trái là màu đỏ làm ví dụ. Khi đó, các cạnh cần được đưa về đúng vị trí tiếp theo là cạnh vàng-đỏ + cạnh vàng-cam (phần được tô sáng). Ý tưởng chính là tìm cách đưa cạnh vàng-đỏ xuống mặt đáy thông qua việc hoán đổi cạnh trên-dưới, và cạnh vàng-cam cũng vậy. Hai cạnh này sẽ nằm đối diện nhau ở mặt đáy, sau đó xoay mặt trên đến vị trí thích hợp, M2 U hoặc M2 U' là có thể giải xong các cạnh trái phải của lớp U.

Để giúp mọi người dễ hiểu hơn, tôi đã tổng hợp sáu hình thái của EO trên [trang LSE của Thư viện công thức Phương pháp Roux](/zh/projects/rubiks-cube/roux#lse). Mỗi khi nhấp vào "Xem chi tiết" trên mỗi hình, trạng thái tương ứng sẽ mở ra trong 3D Rubik, với các cạnh sai hướng được tự động tô sáng. Trang này cũng bao gồm tất cả các trường hợp của việc đặt UL/UR và bốn cạnh cuối cùng.

Việc giảm lượng luyện tập trong giai đoạn này không phải là điều xấu. Giai đoạn trì trệ không thể vượt qua bằng cách luyện tập số lượng lớn, mà phải dựa vào việc thay đổi một thói quen xấu cụ thể. Kinh nghiệm của tôi là mỗi lần chỉ thay đổi một thói quen.

### Giai đoạn bốn: 30 giây → 28 giây (Sau tuần 13)

**Dữ liệu**: Sau ngày 4 tháng 8. Tổng số lần luyện tập được ghi lại trong cả tháng 9 là 122 lần, nhưng thực tế có nhiều lần luyện tập không được ghi lại. Tôi đã biến khối Rubik thành một món đồ chơi trên bàn, tiện tay là lấy ra chơi: khi tâm trạng tốt thì chơi vài ván, khi bực bội lo lắng cũng chơi vài ván, khi giải lao làm việc chơi vài ván, khi buồn chán cũng chơi vài ván, để việc chơi Rubik hòa nhập vào cuộc sống hàng ngày. Ao100 cũng dần giảm từ 29.9 xuống 28.2.

**Gặp khó khăn ở đâu**: Không có nút thắt cổ chai rõ ràng, chỉ đơn thuần là chưa đủ thành thạo.

**Nên luyện gì**:

Nếu tốc độ trung bình của bạn vẫn trên 30 giây, thì điều duy nhất bạn cần làm là tiếp tục luyện tập thật nhiều, chứ không phải học thuộc các công thức mới.

Liên tục luyện tập dự đoán thông qua việc xoay chậm, bạn sẽ ngày càng nhanh hơn.

Bất cứ khi nào rảnh rỗi, hãy lấy khối Rubik ra chơi. Đặt khối Rubik ở nơi bạn dễ dàng với tới, ví dụ như trên bàn làm việc, để có thể chơi trong lúc giải lao. Bạn cũng có thể thường xuyên quay video quá trình giải của mình, xem giai đoạn nào tốn nhiều thời gian nhất, sau đó tối ưu hóa có mục tiêu. Đây chính là luyện tập có chủ đích. Tốc độ tiến bộ của bạn không phụ thuộc vào tổng số lần luyện tập thông thường, mà là số lần luyện tập có chủ đích.

Và rồi bạn sẽ nhận ra, sau khi vượt qua giai đoạn trì trệ 30–35 giây, tốc độ của mình lại giảm thêm một bậc nữa.

Đến giai đoạn này thì xin chúc mừng bạn, trong mắt người mới chơi, bạn đã là một cao thủ rất đáng nể rồi!

## Cái giá của việc không học thuộc công thức

Nói đến đây, tôi phải thành thật một chút. Việc không học thuộc công thức không phải là miễn phí.

Giai đoạn CMLL sẽ chậm. 42 trường hợp được giải quyết bằng 9 công thức, điều này có nghĩa là một số trường hợp sẽ phải làm hai lần. Những người học thuộc toàn bộ CMLL sẽ nhanh hơn tôi hai ba giây ở bước này.

Kỹ thuật lớp M có ngưỡng khó cao. Nửa sau của phương pháp Roux hoàn toàn dựa vào lớp M, lớp M khó xoay hơn R, U, dễ bị kẹt, và yêu cầu đối với bản thân khối Rubik cũng cao hơn.

Đừng lo lắng về giới hạn. Trong số các vận động viên hàng đầu, cũng có người dùng Roux để lọt vào top thế giới, bản thân phương pháp này không có giới hạn. Nhưng để xuống dưới 15 giây, rất có thể bạn sẽ phải học thuộc đủ 42 công thức CMLL. Tuy nhiên, đó là chuyện của một giai đoạn khác. Để đạt dưới 30 giây, thì không cần.

Hơn nữa, hầu như mọi người chơi Rubik một tay đẳng cấp thế giới đều sử dụng phương pháp Roux, bởi vì nó thực sự rất phù hợp cho thao tác một tay.

**Thành tích nhanh nhất bằng phương pháp Roux trong các cuộc thi chính thức (WCA):**

- Một lần 4.11 giây, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Philippines), Valenzuela Cubing Open 2023, được công nhận là kỷ lục đơn lần nhanh nhất của Roux ( [video tái tạo](https://www.youtube.com/watch?v=5H4TRJSUm-U) )
- Trung bình 5.98 giây, cũng là anh ấy, năm 2019, khi đó là kỷ lục châu Á, và cũng là người thứ ba trong lịch sử đạt trung bình dưới 6 giây chính thức ( [thông tin WCA](https://www.worldcubeassociation.org/persons/2017VILL41) )
- Anh ấy cũng là [người giữ kỷ lục thế giới một tay](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): trung bình 8.09, một lần 6.05 (2024). Cộng đồng chơi một tay thường coi Roux là phương pháp tối ưu nhất.

Tôi nghĩ đây là một cuộc trao đổi rất đáng giá. Bạn đánh đổi hai ba giây ở giai đoạn CMLL để đổi lấy việc: biết mình đang làm gì ở mỗi bước, không quên cách giải ngay cả khi không chạm vào Rubik trong ba tháng, và có thể suy luận ra cách giải cho bất kỳ khối Rubik nào chưa từng thấy.

## Tổng kết

![Hoàn thành giải](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Từ việc có thể giải được Rubik đến dưới 30 giây không phải là quá trình học thuộc công thức, mà là quá trình rèn luyện sự phối hợp nhịp nhàng giữa tay, mắt và não bộ.

Bốn giai đoạn, bốn điều cần làm: trước tiên học cách nhìn mà không xoay khối Rubik, sau đó học cách xây khối phải mà không phá hủy khối trái, tiếp theo học cách nhìn trước bước tiếp theo khi đang thực hiện bước hiện tại, và cuối cùng là để tay theo kịp mắt.

Công thức không phải là nguồn gốc của tốc độ. Khả năng quan sát mới là yếu tố quyết định.

Hãy học cách tạo ra phản hồi tích cực thông qua sự tiến bộ ở mỗi khâu. Ngay cả việc luyện tập thành thạo cũng không quá nhàm chán, đặc biệt là khi bạn bất ngờ phá vỡ kỷ lục của chính mình. Đặc biệt ở giai đoạn sơ cấp và trung cấp, bạn sẽ trải nghiệm niềm vui của việc phá kỷ lục mỗi ngày.

Tất cả các công thức và trường hợp được đề cập trong bài viết này, tôi đều đã tổng hợp trong [Thư viện công thức Phương pháp Roux](/zh/projects/rubiks-cube/roux). Khi gặp khó khăn, hãy quay lại tra cứu.

Thế giới Rubik có vô vàn niềm vui, chúc bạn chơi thật vui vẻ.

## Phụ lục 1: Danh sách luyện tập theo từng giai đoạn

**Giai đoạn một (> 60 giây)**

- Cố định góc quan sát, không lật khối Rubik trong suốt quá trình giải
- Tìm thấy khối màu mong muốn mà không cần dừng lại
- Xoay chậm, nói rõ ý định của từng bước
- Chỉ luyện khối trái, lặp lại 50 lần

**Giai đoạn hai (60 → 40 giây)**

- Khối phải chỉ dùng R, r, M, U, không chạm vào khối trái
- Luyện tập CMLL hai giai đoạn
- Luyện tập nhịp điệu M' U M' U, 5 phút mỗi ngày

**Giai đoạn ba (40 → 30 giây)**

- Dừng lại ngay khi hoàn thành CMLL, nhìn một cái là biết số cạnh sai hướng
- Xoay chậm + dự đoán: mắt luôn nhìn khối tiếp theo
- Giải ít nhất 20 lần chất lượng cao mỗi ngày

**Giai đoạn bốn (< 30 giây)**

- Quay video để tìm các điểm dừng
- Kỹ thuật: dùng ngón tay cái cho R U R' U', ngón áp út cho lớp M
- Giải 20 lần chất lượng cao mỗi ngày, không chạy theo số lượng

## Phụ lục 2: Công cụ

- **csTimer**: [cstimer.net](https://cstimer.net/). Mở thống kê Ao5 / Ao12 / Ao100, Ao100 mới là trình độ thực sự của bạn, thành tích đơn lần là may mắn.
- **Rubik 3D**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Tất cả các công thức trong bài viết này đều có thể nhập vào đây để xem hoạt ảnh.
- **Thư viện công thức Phương pháp Roux thân thiện với người mới**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Bao gồm các cách lắp khối trái, khối phải phổ biến, 9 công thức CMLL hai giai đoạn, và tất cả các trường hợp của LSE (EO, UL/UR, bốn cạnh cuối). Mỗi hình đều có thể mở trong Rubik 3D, tự động ẩn các khối không liên quan và tô sáng các cạnh cần di chuyển.
- **Công cụ phân tích luyện tập csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Kéo thả file xuất từ csTimer vào đây, bạn sẽ thấy xu hướng thành tích của mình, đường cong Ao5/Ao12/Ao100, các kỷ lục cá nhân (PB), bảng các cột mốc (lần đầu tiên đạt sub-60, sub-40, sub-30 là ngày nào) và đường cong luyện tập theo luật lũy thừa (Power Law). Tất cả các biểu đồ trong bài viết này đều được lấy từ đây. Dữ liệu chỉ được xử lý trong trình duyệt của bạn, không được tải lên. Nếu không có file xuất, bạn có thể tải dữ liệu 4441 lần của tôi để xem thử hiệu quả.

*Bài viết này có chứa các liên kết liên kết Amazon: Khi bạn mua hàng qua các liên kết này, tôi sẽ nhận được một khoản hoa hồng nhỏ, nhưng giá của bạn sẽ không thay đổi.*

## Đọc thêm

- [Cách giải Rubik mà không cần học thuộc công thức: Ngay cả học sinh tiểu học cũng có thể hiểu](/zh/blog/solve-rubiks-cube-without-formulas)
