import { useState } from 'react';

const Join = () => {
    const [memberType, setMemberType] = useState('individual');

    return (
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="mb-6 text-2xl font-bold">회원 가입</h1>

            <div className="mb-6">
                <button className={`mr-2 rounded px-4 py-2 ${memberType === 'individual' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setMemberType('individual')}>
                    개인회원
                </button>
                <button className={`rounded px-4 py-2 ${memberType === 'business' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setMemberType('business')}>
                    사업자회원
                </button>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="mb-1 block">아이디 *</label>
                    <input type="text" className="form-input w-full rounded border px-3 py-2" placeholder="(영문,숫자/4자~16자)" />
                </div>

                <div>
                    <label className="mb-1 block">비밀번호 *</label>
                    <input type="password" className="form-input w-full rounded border px-3 py-2" placeholder="(영문 대소문자/숫자 4자~16자)" />
                </div>

                <div>
                    <label className="mb-1 block">비밀번호 확인 *</label>
                    <input type="password" className="form-input w-full rounded border px-3 py-2" />
                </div>

                <div>
                    <label className="mb-1 block">이름 *</label>
                    <input type="text" className="form-input w-full rounded border px-3 py-2" />
                </div>

                <div>
                    <label className="mb-1 block">주소</label>
                    <input type="text" className="form-input mr-2 w-1/4 rounded bg-gray-200 px-4 py-2" readOnly placeholder="우편번호" />
                    <button className="mb-2 rounded bg-gray-200 px-4 py-2">주소검색</button>
                    <input type="text" className="form-input mb-2 w-full rounded border px-3 py-2" placeholder="기본주소" />
                    <input type="text" className="form-input w-full rounded border px-3 py-2" placeholder="나머지 주소(선택 입력 가능)" />
                </div>

                <div>
                    <label className="mb-1 block">일반전화</label>
                    <div className="flex space-x-2">
                        <select className="form-select w-1/4 rounded border px-3 py-2">
                            <option>02</option>
                            {/* 다른 지역번호 옵션들 */}
                        </select>
                        <input type="text" className="form-input w-1/4 rounded border px-3 py-2" />
                        <input type="text" className="form-input w-1/4 rounded border px-3 py-2" />
                    </div>
                </div>

                <div>
                    <label className="mb-1 block">휴대전화 *</label>
                    <div className="flex space-x-2">
                        <select className="form-select w-1/4 rounded border px-3 py-2">
                            <option>010</option>
                            {/* 다른 번호 옵션들 */}
                        </select>
                        <input type="text" className="form-input w-1/4 rounded border px-3 py-2" />
                        <input type="text" className="form-input w-1/4 rounded border px-3 py-2" />
                    </div>
                </div>

                <div>
                    <label className="mb-1 block">이메일 *</label>
                    <input type="email" className="form-input w-full rounded border px-3 py-2" />
                </div>

                <button type="submit" className="w-full rounded bg-blue-500 py-2 text-white">
                    가입하기
                </button>
            </form>
        </div>
    );
};

export default Join;
